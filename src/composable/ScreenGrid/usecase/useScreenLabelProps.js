/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenGrid\usecase\useScreenLabelProps.js
 * @Author: maggot-code
 * @Date: 2022-07-27 15:57:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 16:29:23
 * @Description:
 */
export function useScreenLabelProps(extend = {}) {
    return Object.assign({}, extend, {
        icon: {
            type: Function,
            default: () => 'el-icon-eleme',
        },
        labelClassName: {
            type: [Array, String],
            default: () => [],
        },
        iconClassName: {
            type: [Array, String],
            default: () => [],
        },
        textClassName: {
            type: [Array, String],
            default: () => [],
        },
    });
}

export default useScreenLabelProps;
