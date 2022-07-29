/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:35:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 16:46:22
 * @Description:
 */
import { flow } from 'lodash';
import { toBoolean } from '@/shared/transform';
import { mergeNodeToProps } from '@/composable/Tree';

// 如果是递归组件，可以用来判断是否还需要继续向下递归
function setupRenderChild(config) {
    const { node } = config;

    const renderChild = toBoolean(node.renderChild);
    const status = renderChild && node.hasChild;

    return mergeNodeToProps(config, {
        renderChild: status,
    });
}

export function NodeEntity(config) {
    return flow([setupRenderChild])(config);
}

export default NodeEntity;
