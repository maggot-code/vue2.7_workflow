/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:51:55
 * @Description:
 */
import { ViewEntity } from './View.entity';

function setupMetaNode(node) {
    const { children } = node;
    const hasChild = Array.isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;
    const view = ViewEntity({ hasChildOnlyone, node });

    return {
        hasChild,
        hasChildOnlyone,
        view,
        children: hasChild ? children : [],
    };
}

export function NodeEntity(other) {
    return Object.assign({}, setupMetaNode(other), other);
}

export default NodeEntity;
