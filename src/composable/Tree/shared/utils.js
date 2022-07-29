/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-07-29 15:46:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 15:47:08
 * @Description:
 */
export function mergeNodeToProps(config, other = {}) {
    return Object.assign({}, config, {
        node: Object.assign({}, config.node, other),
    });
}
