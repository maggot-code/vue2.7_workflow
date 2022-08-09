/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeNode.js
 * @Author: maggot-code
 * @Date: 2022-08-02 15:41:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 10:20:25
 * @Description:
 */
import { provide } from 'vue';
import { cloneDeep, assign } from 'lodash';

function setupToloop(node) {
    return node.hasChild;
}

export const TreeNodeConfig = {
    toLoop: setupToloop,
};

export function useTreeNode(props, config = TreeNodeConfig) {
    const bind = assign(TreeNodeConfig, cloneDeep(config));

    provide(props.nodeKey, bind);

    return {};
}

export default useTreeNode;
