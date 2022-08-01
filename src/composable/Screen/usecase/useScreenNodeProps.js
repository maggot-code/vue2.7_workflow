/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenNodeProps.js
 * @Author: maggot-code
 * @Date: 2022-08-01 13:51:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:51:58
 * @Description:
 */
import { NodeProps } from '../shared/props';

export function useScreenNodeProps(other = {}) {
    return Object.assign({}, NodeProps, other);
}

export default useScreenNodeProps;
