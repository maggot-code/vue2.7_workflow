/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\index.js
 * @Author: maggot-code
 * @Date: 2022-08-12 15:36:29
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 17:20:46
 * @Description:
 */
import { unref, computed } from 'vue';
import { ChinaCRS, LangType } from 'mars3d';
import { SceneEntity } from './Scene';
import { ControlEntity } from './Control';

import TokenJson from '../../shared/config/token.json';
import MouseJson from '../../shared/config/mouse.json';
import TerrainJson from '../../shared/config/terrain.json';
import BasemapsJson from '../../shared/config/basemaps.json';
import LayersJson from '../../shared/config/layers.json';

export function ConfigEntity() {
    const scene = SceneEntity();
    const control = ControlEntity();

    const config = computed(() => {
        return {
            chinaCRS: ChinaCRS.WGS84,
            lang: LangType.ZH,
            scene: unref(scene.config),
            control: unref(control.config),
            token: TokenJson,
            mouse: MouseJson,
            terrain: TerrainJson,
            basemaps: BasemapsJson,
            layers: LayersJson,
        };
    });

    return {
        scene,
        control,
        config,
    };
}

export default ConfigEntity;
