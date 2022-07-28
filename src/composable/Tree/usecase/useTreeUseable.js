/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeUseable.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:05:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 17:01:38
 * @Description:
 */
import { ParentNodeEntity } from '../entity/ParentNode.entity';
import { ViewEntity } from '../entity/View.entity';
import { useFloorUseable } from './useFloorUseable';

export function useTreeUseable(treeData = [], parent = null) {
    const complete = useFloorUseable(treeData).complete.map((node) => {
        const { hasChild, children } = node;
        const tonode = ParentNodeEntity(node, parent);

        if (hasChild) {
            tonode.children = useTreeUseable(children, tonode)?.complete ?? [];
        }

        tonode.view = ViewEntity(tonode);
        return tonode;
    });

    return {
        datasource: treeData,
        complete,
    };
}

export default useTreeUseable;
