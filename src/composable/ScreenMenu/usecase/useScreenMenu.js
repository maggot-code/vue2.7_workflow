/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\usecase\useScreenMenu.js
 * @Author: maggot-code
 * @Date: 2022-07-29 09:22:20
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:11:13
 * @Description:
 */
import { onBeforeUnmount, provide, unref, ref, computed } from 'vue';

export function useScreenMenu(props) {
    const field = ref(props.view.field);
    const componentName = ref(props.view.component);
    const display = ref(props.view.display);
    const label = ref(props.view.label);
    const view = computed(() => {
        return {
            field: unref(field),
            component: unref(componentName),
            display: unref(display),
            label: unref(label),
        };
    });

    function setupField(view) {
        field.value = view.field;
    }
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
        setupField(view);
        setupComponentName(view);
        setupDisplay(view);
        setupLabel(view);
    }
    function transformPropsToView(props) {
        const { field, component, display, name } = props;
        return {
            field,
            component,
            display,
            label: name,
        };
    }

    const output = {
        view,
        setupView,
        setupField,
        setupComponentName,
        setupDisplay,
        setupLabel,
        transformPropsToView,
    };

    provide(props.field, output);

    onBeforeUnmount(() => {
        setupComponentName('unknow');
        setupField('');
    });

    return output;
}

export default useScreenMenu;
