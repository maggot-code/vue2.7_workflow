/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 17:01:19
 * @Description:
 */
import { v4 } from 'uuid';
import { isArray } from 'lodash';
import { toBoolean } from '@/shared/transform';

/**
 * "toChild" or "toSelf" must have one to "true".
 * toSelf 权重高于 toChild.
 * 如果确定 toSelf 为 true，则 toChild 必须为 false.
 * @param {*} node
 * @returns NodeEntity
 */
function setupMetaNodeRender(node) {
    const { hasChild, renderSelf, renderChild } = node;

    const renderStatus = {
        toSelf: toBoolean(renderSelf),
        toChild: toBoolean(renderChild),
    };

    // 如果 toChild 为 true，则需要验证是否存在子节点
    if (!hasChild && renderStatus.toChild) renderStatus.toChild = false;

    // 如果 toChild 为 false 并且 toSelf 也为 false，则 toSelf 必须为 true
    if (!renderStatus.toChild && !renderStatus.toSelf) {
        renderStatus.toSelf = true;
    }

    return Object.assign({}, node, renderStatus);
}

function setupMetaNode(node, index) {
    const { children, sort, field } = node;
    const hasChild = isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;

    return {
        hasChild,
        hasChildOnlyone,
        sort: sort || index,
        field: field ?? v4(),
        children: hasChild ? children : [],
    };
}

export function NodeEntity(other, index) {
    const node = Object.assign({}, other, setupMetaNode(other, index));
    return setupMetaNodeRender(node);
}

export default NodeEntity;
