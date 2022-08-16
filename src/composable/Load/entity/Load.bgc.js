/*
 * @FilePath: \arcgismap\src\composable\Load\entity\Load.bgc.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:58:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 17:03:55
 * @Description:
 */
import { unref, toRef } from 'vue';
import { assign } from 'lodash';
import { toString } from '@/shared/transform';
import { LoadBgcOptions } from '../shared/config/options';

export function LoadBackgroundColorEntity(options = LoadBgcOptions) {
    const config = assign(LoadBgcOptions, options);

    const color = toRef(config, 'color');

    const useColor = toRef(config, 'useColor');

    function setupColor(value) {
        color.value = toString(value, LoadBgcOptions.color);
        return unref(color);
    }

    function usableColor() {
        useColor.value = true;
        return unref(useColor);
    }

    function unusableColor() {
        useColor.value = false;
        return unref(useColor);
    }

    return {
        color,
        useColor,
        setupColor,
        usableColor,
        unusableColor,
    };
}

export default LoadBackgroundColorEntity;
