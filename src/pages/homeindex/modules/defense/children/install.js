/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\defense\children\install.js
 * @Author: maggot-code
 * @Date: 2022-07-29 11:11:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 11:18:43
 * @Description:
 */
import MassifDefenseDomain from './massif-defense-domain.vue';
import MassifDefense from './massif-defense.vue';

const components = [MassifDefenseDomain, MassifDefense];

// 定义 install 方法
const installs = function (Vue) {
    if (installs.installed) return;
    installs.installed = true;
    // 遍历注册所有控件
    components.map((component) => Vue.component(component.__name, component));
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
    installs(window.Vue);
}

export const modules = {};
components.forEach((component) => {
    modules[component.__name] = component;
});

export default {
    installs,
};
