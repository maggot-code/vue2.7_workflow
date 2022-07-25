/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Node.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:08:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 17:41:30
 * @Description:
 */
function setupMetaNodeDisplayType(node) {
    // render | dialog | router | window
    const { display } = node;
    return display ? display : 'render';
}
function setupMetaNodeComponent(node) {
    const { component } = node;
    return component ? component : 'unknow';
}
function setupMetaNodeLabel(node) {
    const { name } = node;
    return name ? name : '虚拟节点';
}
function setupMetaNode(node) {
    const { children } = node;
    const hasChild = Array.isArray(children) && children.length > 0;
    const hasChildOnlyone = hasChild && children.length === 1;
    const component = setupMetaNodeComponent(node);
    const display = setupMetaNodeDisplayType(node);
    const firstLabel = hasChildOnlyone
        ? setupMetaNodeLabel(children[0])
        : setupMetaNodeLabel(node);
    const firstComponent = hasChildOnlyone
        ? setupMetaNodeComponent(children[0])
        : component;
    const firstDisplay = hasChildOnlyone
        ? setupMetaNodeDisplayType(children[0])
        : display;

    return {
        hasChild,
        hasChildOnlyone,
        firstLabel,
        firstComponent,
        firstDisplay,
        component,
        display,
        children: hasChild ? children : [],
    };
}

export function NodeEntity(other) {
    return Object.assign({}, setupMetaNode(other), other);
}

export default NodeEntity;
