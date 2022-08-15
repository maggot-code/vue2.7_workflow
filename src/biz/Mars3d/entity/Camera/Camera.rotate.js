/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Camera\Camera.rotate.js
 * @Author: maggot-code
 * @Date: 2022-08-15 13:49:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 18:11:08
 * @Description:
 */
import { onMounted, unref } from 'vue';
import { Cesium } from 'mars3d';

let previousTime = 0;

const props = {
    spinRate: 1,
    weight: 1000,
};

export function CameraRotateEntity(mapview, options = props) {
    const { spinRate, weight } = options;

    function effectRotate() {
        console.log(unref(mapview));
        const currentTime = unref(mapview).clock.currentTime.secondsOfDay;
        const delta = (currentTime - previousTime) / weight;

        previousTime = currentTime;
        unref(mapview).scene.camera.rotate(
            Cesium.Cartesian3.UNIT_Z,
            -spinRate * delta
        );
    }

    onMounted(() => {
        previousTime = unref(mapview).clock.currentTime.secondsOfDay;
    });

    return {
        effectRotate,
    };
}

export default CameraRotateEntity;
