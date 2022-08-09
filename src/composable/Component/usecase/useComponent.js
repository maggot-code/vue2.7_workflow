/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\usecase\useComponent.js
 * @Author: maggot-code
 * @Date: 2022-07-29 17:08:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 14:48:13
 * @Description:
 */
import { ref, unref } from 'vue';
export function useComponent(components = []) {
    const componentName = ref('unknow');
    const modules = {};

    const installs = function (Vue) {
        if (installs.installed) return;
        installs.installed = true;
        // 遍历注册所有控件
        components.map((component) =>
            Vue.component(component.__name, component)
        );
    };

    // 检测到 Vue 才执行，毕竟我们是基于 Vue 的
    if (typeof window !== 'undefined' && window.Vue) {
        installs(window.Vue);
    }

    components.forEach((component) => {
        modules[component.__name] = component;
    });

    function setupComponent(name) {
        componentName.value = unref(name);
        return name;
    }
    function setupName(name) {
        return modules[unref(name)] ?? 'unknow';
    }

    return {
        componentName,
        setupComponent,
        setupName,
    };
}

export default useComponent;
