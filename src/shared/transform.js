/*
 * @FilePath: \vue2.7_workflow\src\shared\transform.js
 * @Author: maggot-code
 * @Date: 2022-07-27 16:22:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-27 16:48:17
 * @Description:
 */
import { isArray } from 'lodash';

export function toArray(target) {
    return isArray(target) ? target : [target];
}
