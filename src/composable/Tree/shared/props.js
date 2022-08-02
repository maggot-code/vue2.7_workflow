/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\shared\props.js
 * @Author: maggot-code
 * @Date: 2022-07-29 15:18:02
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 17:18:25
 * @Description:
 */
export const NodeProps = {
    nodeKey: {
        type: [String, Number],
        require: true,
    },
    id: {
        type: [String, Number],
        default: 0,
    },
    pid: {
        type: [String, Number],
        default: 0,
    },
    parent: {
        type: Object,
        default: null,
    },
    children: {
        type: Array,
        default: () => [],
    },
    name: {
        type: String,
        default: '',
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
    level: {
        type: Number,
        default: 0,
    },
    hasParent: {
        type: Boolean,
        default: false,
    },
    hasChild: {
        type: Boolean,
        default: false,
    },
    hasChildOnlyone: {
        type: Boolean,
        default: false,
    },
};

export const NodeSetupProps = {
    parent: null,
    node: {},
    index: 0,
};
