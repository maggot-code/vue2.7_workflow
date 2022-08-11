/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useConfig.js
 * @Author: maggot-code
 * @Date: 2022-08-11 16:02:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 16:18:09
 * @Description:
 */
import { ChinaCRS, LangType } from 'mars3d';
import { assign } from 'lodash';

import TokenJson from '../shared/config/token.json';
import TerrainJson from '../shared/config/terrain.json';
import MouseJson from '../shared/config/mouse.json';

const other = {
    chinaCRS: ChinaCRS.WGS84,
    lang: LangType.ZH,
    token: TokenJson,
    terrain: TerrainJson,
    mouse: MouseJson,
};

function setupConfig() {
    return assign(other);
}

export function useConfig() {
    const config = setupConfig();
    return {
        config,
    };
}

export default useConfig;
