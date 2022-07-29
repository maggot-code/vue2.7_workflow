/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:12:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 16:32:16
 * @Description:
 */
import { toString, toBoolean } from '@/shared/transform';
import { mergeNodeToProps } from '@/composable/Tree';

export function NodeEntity(config) {
    const { node } = config;

    return mergeNodeToProps(config, {
        hasComponent: toBoolean(node.component),
        componentName: toString(node.component, 'unknow'),
    });
}

export default NodeEntity;
