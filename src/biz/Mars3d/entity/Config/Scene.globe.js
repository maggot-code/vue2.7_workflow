/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Scene.globe.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:10:57
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 16:11:18
 * @Description:
 */
import SceneGlobeJson from '../../shared/config/scene.globe.json';

export function SceneGlobeEntity() {
    const config = SceneGlobeJson;

    return {
        config,
    };
}

export default SceneGlobeEntity;
