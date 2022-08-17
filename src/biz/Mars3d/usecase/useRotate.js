/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useRotate.js
 * @Author: maggot-code
 * @Date: 2022-08-17 11:17:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-17 14:20:17
 * @Description:
 */
import { onBeforeUnmount, onMounted } from 'vue';
import { RotatePointEntity } from '../entity/Camera/Rotate.point';
import { extractBind, extractUnbind } from '../shared/utils';

export function useRotate(options) {
    const { mapEntity } = options;
    const { map } = mapEntity;
    const rotatePoint = RotatePointEntity(map);

    const extract = [rotatePoint];
    onMounted(() => {
        extractBind(extract).forEach((bind) => bind());
    });
    onBeforeUnmount(() => {
        extractUnbind(extract).forEach((unbind) => unbind());
    });

    return {
        rotatePoint: rotatePoint.rotatePoint,
    };
}

export default useRotate;
