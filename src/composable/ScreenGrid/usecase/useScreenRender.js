/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenRender.js
 * @Author: maggot-code
 * @Date: 2022-07-28 13:05:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 13:13:34
 * @Description:
 */
import { computed } from 'vue';

export function useScreenRender(props) {
    const usableRender = computed(() => {
        return (
            (props.hasChildren && !props.hasChildOnlyone) || props.hasContinue
        );
    });

    return {
        usableRender,
    };
}

export default useScreenRender;
