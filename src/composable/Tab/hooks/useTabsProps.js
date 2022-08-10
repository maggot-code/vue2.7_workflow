/*
 * @FilePath: \arcgismap\src\pages\tabindex\view\hooks\useTabsProps.js
 * @Author: zhangxin
 * @Date: 2022-07-29 17:11:06
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-09 16:38:56
 * @Description:
 */
export function useTabsProps(extend) {
    return Object.assign({}, extend, {
        structure: {
            type: Array,
            required: true,
        },
        currentId: {
            type: [String, Number],
            default: 0,
        },
        tabPosition: {
            type: String,
            default: 'default',
        },
    });
}
