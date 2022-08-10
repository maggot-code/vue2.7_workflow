/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-10 17:48:22
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-10 18:18:47
 * @Description:
 */
import { ChinaCRS, LangType } from 'mars3d';
import { flow, assign } from 'lodash';
import { toObject, toArray } from '@/shared/transform';

import TokenJson from '../shared/config/token.json';
import SceneJson from '../shared/config/scene.json';
import SceneCenterJson from '../shared/config/scene.center.json';
// import SceneExtentJson from '../shared/config/scene.extent.json';
import SceneGlobeJson from '../shared/config/scene.globe.json';
import SceneCameraControllerJson from '../shared/config/scene.cameraController.json';
import SceneClockJson from '../shared/config/scene.clock.json';
import ControlJson from '../shared/config/control.json';
import ControlZoomJson from '../shared/config/control.zoom.json';
import ControlLocationBarJson from '../shared/config/control.locationbar.json';
import ControlCompassJson from '../shared/config/control.compass.json';
import ControlDistanceLegendJson from '../shared/config/control.distancelegend.json';
import MouseJson from '../shared/config/mouse.json';
import BasemapsJson from '../shared/config/basemaps.json';
import LayersJson from '../shared/config/layers.json';
import TerrainJson from '../shared/config/terrain.json';

function setupToken(config) {
    const { token } = config;

    config.token = assign(TokenJson, toObject(token));

    return config;
}

function setupScene(config) {
    const { scene } = config;

    const centerConfig = assign(SceneCenterJson, toObject(scene?.center));
    // const extentConfig = assign(SceneExtentJson,toObject(scene.extent));
    const globeConfig = assign(SceneGlobeJson, toObject(scene?.globe));
    const cameraControllerConfig = assign(
        SceneCameraControllerJson,
        toObject(scene?.cameraController)
    );
    const clockConfig = assign(SceneClockJson, toObject(scene?.clock));

    config.scene = assign(
        {
            center: centerConfig,
            // extent: extentConfig,
            globe: globeConfig,
            cameraController: cameraControllerConfig,
            clock: clockConfig,
        },
        SceneJson,
        toObject(scene)
    );

    return config;
}

function setupControl(config) {
    const { control } = config;
    const zoomConfig = assign(ControlZoomJson, toObject(control?.zoom));
    const locationBarConfig = assign(
        ControlLocationBarJson,
        toObject(control?.locationBar)
    );
    const compassConfig = assign(
        ControlCompassJson,
        toObject(control?.compass)
    );
    const distanceLegendConfig = assign(
        ControlDistanceLegendJson,
        toObject(control?.distanceLegend)
    );

    config.control = assign(
        {
            zoom: zoomConfig,
            locationBar: locationBarConfig,
            compass: compassConfig,
            distanceLegend: distanceLegendConfig,
        },
        ControlJson,
        toObject(control)
    );
    return config;
}

function setupMouse(config) {
    const { mouse } = config;

    config.mouse = assign(MouseJson, toObject(mouse));

    return config;
}

function setupTerrain(config) {
    const { terrain } = config;

    config.terrain = assign(TerrainJson, toObject(terrain));

    return config;
}

function setupBasemap(config) {
    const { basemaps } = config;

    config.basemaps = BasemapsJson.concat(toArray(basemaps ?? []));

    return config;
}

function setupLayer(config) {
    const { layers } = config;

    config.layers = LayersJson.concat(toArray(layers ?? []));

    return config;
}

function setupOther(config) {
    const chinaCRS = ChinaCRS.WGS84;
    const lang = LangType.ZH;

    return assign(
        {
            chinaCRS,
            lang,
        },
        config
    );
}

export function ConfigEntity(config) {
    const setup = flow([
        setupToken,
        setupScene,
        setupControl,
        setupMouse,
        setupTerrain,
        setupBasemap,
        setupLayer,
        setupOther,
    ]);

    return setup(config);
}

export default ConfigEntity;
