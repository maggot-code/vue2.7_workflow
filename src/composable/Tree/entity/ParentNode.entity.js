/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\entity\ParentNode.entity.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:51:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 18:12:50
 * @Description:
 */
function setupMetaParent(node, parent) {
    const hasParent = !!(parent && parent.id === node.pid);
    const path = hasParent ? parent.path.concat(node.id) : [node.id];

    return {
        hasParent,
        parent,
        path,
    };
}

export function ParentNodeEntity(other, parent = null) {
    return Object.assign({}, setupMetaParent(other, parent), other);
}

export default ParentNodeEntity;
