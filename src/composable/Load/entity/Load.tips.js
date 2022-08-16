/*
 * @FilePath: \arcgismap\src\composable\Load\entity\Load.tips.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:29:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 16:47:29
 * @Description:
 */
import { unref, toRef } from 'vue';
import { assign } from 'lodash';
import { toString } from '@/shared/transform';
import { LoadTipsOptions } from '../shared/config/options';

export function LoadTipsEntity(options = LoadTipsOptions) {
    const config = assign(LoadTipsOptions, options);

    const tips = toRef(config, 'tips');

    const useTips = toRef(config, 'useTips');

    function setupTips(msg) {
        tips.value = toString(msg, LoadTipsOptions.tips);
        return unref(tips);
    }

    function usableTips() {
        useTips.value = true;
        return unref(useTips);
    }

    function unusableTips() {
        useTips.value = false;
        return unref(useTips);
    }

    return {
        tips,
        useTips,
        setupTips,
        usableTips,
        unusableTips,
    };
}

export default LoadTipsEntity;
