/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useNodeProps.js
 * @Author: maggot-code
 * @Date: 2022-08-01 11:05:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:11:16
 * @Description:
 */
import { NodeProps } from '../shared/props';

export function useNodeProps(other = {}) {
    return Object.assign({}, NodeProps, other);
}

export default useNodeProps;
