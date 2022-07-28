/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeProps.js
 * @Author: maggot-code
 * @Date: 2022-07-26 09:37:12
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 16:24:30
 * @Description:
 */
import { ViewEntity } from '../entity/View.entity';
import { v4 } from 'uuid';

export function useTreeProps(extend = {}) {
    const field = v4();
    return Object.assign({}, extend, {
        pid: 0,
        id: {
            type: [String, Number],
            required: true,
        },
        field: {
            type: [String, Number],
            default: field,
        },
        parent: {
            type: Object,
            default: () => ({}),
        },
        children: {
            type: Array,
            default: () => [],
        },
        level: {
            type: Number,
            default: 0,
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
        toChild: {
            type: Boolean,
            default: false,
        },
        toSelf: {
            type: Boolean,
            default: true,
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
