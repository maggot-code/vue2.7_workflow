/*
 * @FilePath: \vue2.7_workflow\src\composable\ScreenMenu\usecase\useScreenMenuProps.js
 * @Author: maggot-code
 * @Date: 2022-07-29 10:56:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:26:54
 * @Description:
 */
export function useScreenMenuProps() {
    return {
        placement: {
            type: String,
            default: 'left',
        },
        trigger: {
            type: String,
            default: 'hover',
        },
    };
}

export default useScreenMenuProps;