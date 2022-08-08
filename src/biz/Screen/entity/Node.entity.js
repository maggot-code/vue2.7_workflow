/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-08 16:41:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:54:46
 * @Description:
 */
import { mergeNodeToProps } from '@/composable/Tree';
import { toBoolean } from '@/shared/transform';

function setupRenderChild(config) {
    const { node } = config;
    return (
        toBoolean(node.renderChild) && node.hasChild && !node.hasChildOnlyone
    );
}

export function NodeEntity(config) {
    const renderChild = setupRenderChild(config);

    return mergeNodeToProps(config, { renderChild });
}

export default NodeEntity;
