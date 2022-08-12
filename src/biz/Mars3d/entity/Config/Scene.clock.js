/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.clock.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:14:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 16:16:17
 * @Description:
 */
import { Cesium } from 'mars3d';
import { assign } from 'lodash';
import SceneClockJson from '../../shared/config/scene.clock.json';

export function SceneClockEntity() {
    const currentTime = Cesium.JulianDate.fromDate(new Date());
    const config = assign(SceneClockJson, {
        currentTime,
    });

    return {
        config,
    };
}

export default SceneClockEntity;
