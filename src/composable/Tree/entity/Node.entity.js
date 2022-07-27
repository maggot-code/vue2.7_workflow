/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 10:00:13
 * @Description:
 */
import { isBoolean, isArray } from 'lodash';
import { ViewEntity } from './View.entity';

function setupMetaNode(node, index) {
    const { hasContinue, children, sort } = node;
    const hasChild = isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;
    const view = ViewEntity({ hasChildOnlyone, node });

    return {
        hasContinue: isBoolean(hasContinue) ? hasContinue : false,
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
