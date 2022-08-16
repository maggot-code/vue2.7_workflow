/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useRotatePoint.js
 * @Author: maggot-code
 * @Date: 2022-08-16 13:41:39
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 18:21:03
 * @Description:
 */
import { onBeforeUnmount, watch, unref } from 'vue';
import { RotatePointEntity } from '../entity/Camera/Rotate.point';

export function useRotatePoint(mapview, hasMap, ready) {
    const { rotatePoint, startRotate, stopRotate } = RotatePointEntity();

    const readyWatch = watch(ready, () => {});

    onBeforeUnmount(() => {
        readyWatch();
    });

    return {
        startRotate,
        stopRotate,
    };
}

export default useRotatePoint;
