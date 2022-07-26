/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\Path.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-26 09:22:16
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 09:28:19
 * @Description:
 */
const PathProps = {
    hasParent: false,
    parent: null,
    node: null,
};

export function PathEntity(props = {}) {
    const { hasParent, parent, node } = Object.assign({}, PathProps, props);

    const value = hasParent ? parent.path.value.concat(node.id) : [node.id];
    const toString = (separator = ',') => value.join(separator);

    return {
        value,
        toString,
    };
}

export default PathEntity;
