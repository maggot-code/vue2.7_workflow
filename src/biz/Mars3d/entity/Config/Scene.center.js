/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.center.js
 * @Author: maggot-code
 * @Date: 2022-08-15 13:06:51
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 13:08:21
 * @Description:
 */
import SceneCenterJson from '../../shared/config/scene.center.json';

export function SceneCenterEntity() {
    const config = SceneCenterJson;
    return {
        config,
    };
}

export default SceneCenterEntity;
