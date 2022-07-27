/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenLabel.js
 * @Author: maggot-code
 * @Date: 2022-07-27 14:35:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 14:36:34
 * @Description:
 */
import { computed } from 'vue';

export function useScreenLabel(props) {
    const label = computed(() => {
        const { hasChildOnlyone, view } = props;
        return hasChildOnlyone ? view.firstLabel : view.label;
    });

    return {
        label,
    };
}

export default useScreenLabel;
