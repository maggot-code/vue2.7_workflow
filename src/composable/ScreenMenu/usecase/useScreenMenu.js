/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\usecase\useScreenMenu.js
 * @Author: maggot-code
 * @Date: 2022-07-29 09:22:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 10:45:36
 * @Description:
 */
import { onBeforeUnmount, provide, unref, ref, computed } from 'vue';

export function useScreenMenu(props) {
    const componentName = ref(props.view.component);
    const display = ref(props.view.display);
    const label = ref(props.view.label);
    const view = computed(() => {
        return {
            component: unref(componentName),
            display: unref(display),
            label: unref(label),
        };
    });

    function setupComponentName(view) {
        componentName.value = view.component;
    }
    function setupDisplay(view) {
        display.value = view.display;
    }
    function setupLabel(view) {
        label.value = view.label;
    }
    function setupView(view) {
        setupComponentName(view);
        setupDisplay(view);
        setupLabel(view);
    }
    function transformPropsToView(props) {
        const { component, display, name } = props;
        return {
            component,
            display,
            label: name,
        };
    }

    const output = {
        view,
        setupView,
        setupComponentName,
        setupDisplay,
        setupLabel,
        transformPropsToView,
    };

    provide(props.field, output);

    onBeforeUnmount(() => {
        setupComponentName('unknow');
    });

    return output;
}

export default useScreenMenu;
