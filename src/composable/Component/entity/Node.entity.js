/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:12:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:49:30
 * @Description:
 */
import { toUsabled, toString } from '@/shared/transform';
import { mergeNodeToProps } from '@/composable/Tree';

export function NodeEntity(config) {
    const { node } = config;

    return mergeNodeToProps(config, {
        hasComponent: toUsabled(node.component, false, true),
        componentName: toString(node.component, 'unknow'),
    });
}

export default NodeEntity;
