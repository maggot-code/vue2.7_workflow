/*
 * @FilePath: \arcgismap\src\composable\Load\usecase\useLoad.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:40:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 17:06:31
 * @Description:
 */
import { provide, unref } from 'vue';
import { isSymbol, assign } from 'lodash';

import { LoadStateEntity } from '../entity/Load.state';
import { LoadTipsEntity } from '../entity/Load.tips';
import { LoadIconEntity } from '../entity/Load.icon';
import { LoadBackgroundColorEntity } from '../entity/Load.bgc';
import { LoadBindEntity } from '../entity/Load.bind';
import { LoadOptions } from '../shared/config/options';

export function useLoad(options = LoadOptions) {
    const config = assign(LoadOptions, options);
    const name = isSymbol(config.name) ? config.name : Symbol(config.name);

    const { state, setupState } = LoadStateEntity(config);
    const tips = LoadTipsEntity(config);
    const icon = LoadIconEntity(config);
    const bgc = LoadBackgroundColorEntity(config);
    const bind = LoadBindEntity(tips, icon, bgc);

    const output = {
        load: state,
        setupLoad: setupState,
        enableLoad,
        disableLoad,
        switchLoad,
    };

    function enableLoad() {
        setupState(true);
    }
    function disableLoad() {
        setupState(false);
    }
    function switchLoad() {
        setupState(!unref(state));
    }

    provide(name, output);
    return {
        ...output,
        loadBind: bind,
    };
}

export default useLoad;
