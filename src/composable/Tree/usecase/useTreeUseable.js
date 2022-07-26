/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeUseable.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:05:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 10:07:05
 * @Description:
 */
import { ParentNodeEntity } from '../entity/ParentNode.entity';
import { useFloorUseable } from './useFloorUseable';

export function useTreeUseable(treeData = [], parent = null) {
    const complete = useFloorUseable(treeData).complete.map((node) => {
        const { hasChild, children } = node;
        const toNode = ParentNodeEntity(node, parent);

        if (hasChild) {
            toNode.children = useTreeUseable(children, toNode)?.complete ?? [];
        }
        return toNode;
    });

    return {
        datasource: treeData,
        complete,
    };
}

export default useTreeUseable;
