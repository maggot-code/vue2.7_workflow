/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\ParentNode.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:51:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:28:37
 * @Description:
 */
import { PathEntity } from './Path.entity';

function setupMetaParent(node, parent) {
    const hasParent = !!(parent && parent.id === node.pid);
    const path = PathEntity({ hasParent, parent, node });

    return {
        hasParent,
        parent,
        path,
    };
}

export function ParentNodeEntity(other, parent = null) {
    return Object.assign({}, setupMetaParent(other, parent), other);
}

export default ParentNodeEntity;
