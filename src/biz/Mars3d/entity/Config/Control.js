/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Control.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:54:37
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 17:18:24
 * @Description:
 */
import { unref, computed } from 'vue';
import { assign } from 'lodash';
import { ControlZoomEntity } from './Control.zoom';
import { ControlCompassEntity } from './Control.compass';
import { ControlLocationBarEntity } from './Control.locationBar';
import { ControlDistanceLegendEntity } from './Control.distanceLegend';

import ControlJson from '../../shared/config/control.json';

export function ControlEntity() {
    const controlZoom = ControlZoomEntity();
    const controlCompass = ControlCompassEntity();
    const controlLocationBar = ControlLocationBarEntity();
    const controlDistanceLegend = ControlDistanceLegendEntity();

    const config = computed(() => {
        const control = assign(ControlJson, {
            zoom: unref(controlZoom.config),
            compass: unref(controlCompass.config),
            locationBar: unref(controlLocationBar.config),
            distanceLegend: unref(controlDistanceLegend.config),
        });
        return assign(control);
    });

    return {
        controlZoom,
        controlCompass,
        controlLocationBar,
        controlDistanceLegend,
        config,
    };
}

export default ControlEntity;
