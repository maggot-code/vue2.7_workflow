/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 15:01:19
 * @Description:
 */
import { v4 } from 'uuid';
import { flow, isArray } from 'lodash';
import { toBoolean } from '@/shared/transform';
import { mergeNodeToProps } from '../shared/utils';

function setupKey(config) {
    const key = v4();
    return mergeNodeToProps(config, {
        key,
        nodeKey: key,
    });
}

function setupSort(config) {
    const { node, index } = config;

    return mergeNodeToProps(config, {
        sort: node?.sort ?? index,
    });
}

function setupHasChild(config) {
    const { node } = config;
    const children = isArray(node.children) ? node.children : [];

    return mergeNodeToProps(config, {
        hasChild: children.length > 0,
        children,
    });
}

function setupHasChildOnlyone(config) {
    const { node } = config;

    const hasChildOnlyone = node.hasChild && node.children.length === 1;

    return mergeNodeToProps(config, {
        hasChildOnlyone,
    });
}

function _setupRenderChild(config) {
    const { node } = config;

    const renderChild = toBoolean(node.renderChild);
    const status = renderChild && node.hasChild && !node.hasChildOnlyone;

    return mergeNodeToProps(config, {
        renderChild: status,
    });
}

export function NodeEntity(config) {
    return flow([
        setupKey,
        setupSort,
        setupHasChild,
        setupHasChildOnlyone,
        // setupRenderChild,
    ])(config);
}

export default NodeEntity;
