/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeUseable.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:05:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 18:12:17
 * @Description:
 */
import { ParentNodeEntity } from '../entity/ParentNode.entity';
import { useFloorUseable } from './useFloorUseable';

export function useTreeUseable(treeData = [], parent = null) {
    return useFloorUseable(treeData).complete.map((node) => {
        const { hasChild, children } = node;
        const toNode = ParentNodeEntity(node, parent);

        if (hasChild) toNode.children = useTreeUseable(children, toNode);
        return toNode;
    });
}

export default useTreeUseable;
