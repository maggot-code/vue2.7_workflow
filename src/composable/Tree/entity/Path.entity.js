/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Path.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-29 15:12:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:41:25
 * @Description:
 */
import { flow } from 'lodash';
import { mergeNodeToProps } from '../shared/utils';

function setupPath(config) {
    const { parent, node } = config;
    const path = node.hasParent ? [...parent.path, node.id] : [node.id];

    return mergeNodeToProps(config, {
        path,
    });
}

function setupPathString(config) {
    const { node } = config;
    return mergeNodeToProps(config, {
        pathString: node.path.join(','),
    });
}

function setupLevel(config) {
    const { parent } = config;
    const { level } = parent ?? { level: -1 };

    return mergeNodeToProps(config, {
        level: level + 1,
    });
}

export function PathEntity(config) {
    return flow([setupPath, setupPathString, setupLevel])(config);
}

export default PathEntity;
