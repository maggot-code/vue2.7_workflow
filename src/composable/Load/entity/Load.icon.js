/*
 * @FilePath: \arcgismap\src\composable\Load\entity\Load.icon.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:37:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 16:47:20
 * @Description:
 */
import { unref, toRef } from 'vue';
import { assign } from 'lodash';
import { toString } from '@/shared/transform';
import { LoadIconOptions } from '../shared/config/options';

export function LoadIconEntity(options = LoadIconOptions) {
    const config = assign(LoadIconOptions, options);

    const icon = toRef(config, 'icon');

    const useIcon = toRef(config, 'useIcon');

    function setupIcon(msg) {
        icon.value = toString(msg, LoadIconOptions.icon);
        return unref(icon);
    }

    function usableIcon() {
        useIcon.value = true;
        return unref(useIcon);
    }

    function unusableIcon() {
        useIcon.value = false;
        return unref(useIcon);
    }

    return {
        icon,
        useIcon,
        setupIcon,
        usableIcon,
        unusableIcon,
    };
}

export default LoadIconEntity;
