/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeProps.js
 * @Author: maggot-code
 * @Date: 2022-07-26 09:37:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 10:01:08
 * @Description:
 */
import { ViewEntity } from '../entity/View.entity';

export function useTreeProps(extend = {}) {
    return Object.assign({}, extend, {
        pid: 0,
        id: {
            type: [String, Number],
            required: true,
        },
        children: {
            type: Array,
            default: () => [],
        },
        path: {
            type: Array,
            default: () => [],
        },
        pathString: {
            type: String,
            default: '',
        },
        sort: {
            type: Number,
            default: 0,
        },
        view: {
            type: Object,
            default: () => ViewEntity(),
        },
        hasContinue: {
            type: Boolean,
            default: false,
        },
        hasChild: {
            type: Boolean,
            default: false,
        },
        hasParent: {
            type: Boolean,
            default: false,
        },
        hasChildOnlyone: {
            type: Boolean,
            default: false,
        },
    });
}

export default useTreeProps;
