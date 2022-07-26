/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\View.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-26 09:47:01
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:54:21
 * @Description:
 */
const ViewProps = {
    hasChildOnlyone: false,
    node: {},
};

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

export function ViewEntity(props = {}) {
    const { hasChildOnlyone, node } = Object.assign({}, ViewProps, props);
    const { children } = node;

    const label = setupMetaNodeLabel(node);
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
        label,
        component,
        display,
        firstLabel,
        firstComponent,
        firstDisplay,
    };
}

export default ViewEntity;
