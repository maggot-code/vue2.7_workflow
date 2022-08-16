/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Control.locationBar.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:57:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 15:54:11
 * @Description:
 */
import { CRS } from 'mars3d';
import { assign } from 'lodash';
import { toArray } from '@/shared/transform';

import ControlLocationBarJson from '../../shared/config/control.locationBar.json';

function createTemplate(config) {
    const { className, body } = config;
    const name = toArray(className).join(' ');

    return `<div class="${name}">${body}</div>`;
}

const longitude = createTemplate({
    className: 'mars-location-longitude',
    body: '经度：{lng}',
});
const latitude = createTemplate({
    className: 'mars-location-latitude',
    body: `纬度：{lat}`,
});
const altitude = createTemplate({
    className: 'mars3d-location-altitude',
    body: `海拔：{alt}米`,
});
const geogcs = createTemplate({
    className: 'mars3d-location-geogcs',
    body: `横[ {crsx} ]，纵[ {crsy} ]`,
});
const direction = createTemplate({
    className: 'mars3d-location-direction',
    body: `方向角：{heading}°`,
});
const pitch = createTemplate({
    className: 'mars3d-location-pitch',
    body: `俯仰角：{pitch}°`,
});
const viewHeight = createTemplate({
    className: 'mars3d-location-viewheight',
    body: `视角高度：{cameraHeight}米`,
});
const mapLevel = createTemplate({
    className: 'mars3d-location-maplevel',
    body: `层级：{level}`,
});
const templateStruct = [
    longitude,
    latitude,
    altitude,
    geogcs,
    direction,
    pitch,
    viewHeight,
    mapLevel,
];

export function ControlLocationBarEntity() {
    const config = assign(ControlLocationBarJson, {
        fps: import.meta.env.DEV,
        crs: CRS.CGCS2000_GK_Zone_3,
        crsDecimal: 0,
        cacheTime: 64,
        template: templateStruct.join(''),
    });

    return {
        config,
    };
}

export default ControlLocationBarEntity;
