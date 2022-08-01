/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\usecase\useComponentProps.js
 * @Author: maggot-code
 * @Date: 2022-08-01 13:42:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:45:21
 * @Description:
 */
import { ComponentProps } from '../shared/props';

export function useComponentProps(other = {}) {
    return Object.assign({}, ComponentProps, other);
}

export default useComponentProps;
