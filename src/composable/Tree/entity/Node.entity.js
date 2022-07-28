/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 14:18:41
 * @Description:
 */
import { v4 } from 'uuid';
import { isBoolean, isArray } from 'lodash';
import { ViewEntity } from './View.entity';

function setupMetaNode(node, index) {
    const { hasContinue, children, sort, field } = node;
    const hasChild = isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;
    const view = ViewEntity({ hasChildOnlyone, node });

    return {
        hasContinue: isBoolean(hasContinue) ? hasContinue : false,
        hasChild,
        hasChildOnlyone,
        view,
        sort: sort || index,
        field: field ?? v4(),
        children: hasChild ? children : [],
    };
}

export function NodeEntity(other, index) {
    return Object.assign({}, setupMetaNode(other, index), other);
}

export default NodeEntity;
