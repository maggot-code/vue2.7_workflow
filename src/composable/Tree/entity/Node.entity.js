/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 10:16:59
 * @Description:
 */
import { ViewEntity } from './View.entity';

function setupMetaNode(node, index) {
    const { children, sort } = node;
    const hasChild = Array.isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;
    const view = ViewEntity({ hasChildOnlyone, node });

    return {
        hasChild,
        hasChildOnlyone,
        view,
        sort: sort || index,
        children: hasChild ? children : [],
    };
}

export function NodeEntity(other, index) {
    return Object.assign({}, setupMetaNode(other, index), other);
}

export default NodeEntity;
