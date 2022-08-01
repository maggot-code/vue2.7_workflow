/*
 * @FilePath: \vue2.7_workflow\src\shared\transform.js
 * @Author: maggot-code
 * @Date: 2022-07-27 16:22:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-01 13:49:11
 * @Description:
 */
import { isNil, isArray, isString, isBoolean } from 'lodash';

export function toUsabled(target, voidValue, validValue) {
    return isNil(target) ? voidValue : validValue;
}

export function toArray(target) {
    return isArray(target) ? target : [target];
}

export function toString(target, def = '') {
    return isString(target) ? target : def;
}

export function toBoolean(target, def = false) {
    return isBoolean(target) ? target : def;
}
