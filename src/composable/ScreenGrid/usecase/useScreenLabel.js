/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenLabel.js
 * @Author: maggot-code
 * @Date: 2022-07-27 14:35:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 16:59:22
 * @Description:
 */
import { computed, unref } from 'vue';
import { toArray } from '@/shared/transform';

export function useScreenLabel(props) {
    const label = computed(() => {
        return props.hasChildOnlyone ? props.view.firstLabel : props.view.label;
    });
    const labelClassName = computed(() => {
        return toArray(props.labelClassName);
    });
    const textClassName = computed(() => {
        return toArray(props.textClassName);
    });
    const iconClassName = computed(() => {
        const iconName = toArray(props.icon(props));
        const otherClassName = toArray(props.iconClassName);

        return otherClassName.concat(iconName);
    });

    const labelSlot = {
        props: unref(props),
        label: unref(label),
        labelClassName: unref(labelClassName),
        textClassName: unref(textClassName),
        iconClassName: unref(iconClassName),
    };

    return {
        props,
        labelSlot,
        label,
        labelClassName,
        textClassName,
        iconClassName,
    };
}

export default useScreenLabel;
