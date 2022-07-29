/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\View.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-26 09:47:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 13:09:54
 * @Description:
 */
import { toString } from '@/shared/transform';

const ViewProps = {
    display: 'render',
    component: 'unknow',
    name: '虚拟节点',
};

function setupMetaNodeField(node) {
    const { toChild, field, children } = node;
    const [firstNode] = children;
    return toChild ? toString(firstNode.field, field) : toString(field);
}
function setupMetaNodeDisplayType(node) {
    // render | dialog | router | window
    const { toChild, display, children } = node;
    const [firstNode] = children;

    return toChild
        ? toString(firstNode.display, ViewProps.display)
        : toString(display, ViewProps.display);
}
function setupMetaNodeComponent(node) {
    const { toChild, component, children } = node;
    const [firstNode] = children;

    return toChild
        ? toString(firstNode.component, ViewProps.component)
        : toString(component, ViewProps.component);
}
function setupMetaNodeLabel(node) {
    const { toChild, name, children } = node;
    const [firstNode] = children;

    return toChild
        ? toString(firstNode.name, ViewProps.name)
        : toString(name, ViewProps.name);
}

export function ViewEntity(props = {}) {
    const node = Object.assign({}, ViewProps, props);

    return {
        field: setupMetaNodeField(node),
        display: setupMetaNodeDisplayType(node),
        component: setupMetaNodeComponent(node),
        label: setupMetaNodeLabel(node),
    };
}

export default ViewEntity;
