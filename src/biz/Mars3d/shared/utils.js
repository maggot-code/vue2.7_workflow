/*
 * @FilePath: \arcgismap\src\biz\Mars3d\shared\utils.js
 * @Author: maggot-code
 * @Date: 2022-08-17 13:36:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-17 13:47:58
 * @Description:
 */
import { extractGatherAttrs } from '@/shared/utils';

export function extractBind(gather) {
    return extractGatherAttrs(gather, 'bind');
}
export function extractUnbind(gather) {
    return extractGatherAttrs(gather, 'unbind');
}
