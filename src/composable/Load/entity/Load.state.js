/*
 * @FilePath: \arcgismap\src\composable\Load\entity\Load.state.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:17:10
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 16:47:39
 * @Description:
 */
import { unref, toRef } from 'vue';
import { assign } from 'lodash';
import { toBoolean } from '@/shared/transform';
import { LoadStateOptions } from '../shared/config/options';

export function LoadStateEntity(options = LoadStateOptions) {
    const config = assign(LoadStateOptions, options);

    const state = toRef(config, 'state');

    function setupState(status) {
        state.value = toBoolean(status, true);
        return unref(state);
    }

    return {
        state,
        setupState,
    };
}

export default LoadStateEntity;
