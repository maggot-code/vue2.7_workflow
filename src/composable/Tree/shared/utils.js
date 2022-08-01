/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-07-29 15:46:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:24:50
 * @Description:
 */
import { isFunction } from 'lodash';

export function mergeNodeToProps(config, other = {}) {
    return Object.assign({}, config, {
        node: Object.assign({}, config.node, other),
    });
}

export function pickupPropsDefault(props = {}) {
    const data = {};

    Object.keys(props).forEach((key) => {
        if (isFunction(props[key]['default'])) {
            return (data[key] = props[key]['default']());
        }

        data[key] = props[key]['default'];
    });

    return data;
}
