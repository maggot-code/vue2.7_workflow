/*
 * @FilePath: \arcgismap\src\composable\Load\entity\Load.bind.js
 * @Author: maggot-code
 * @Date: 2022-08-16 16:52:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 17:10:10
 * @Description:
 */
import { unref, computed } from 'vue';

export function LoadBindEntity(tipsEntity, iconEntity, bgcEntity) {
    const { tips, useTips } = tipsEntity;
    const { icon, useIcon } = iconEntity;
    const { color, useColor } = bgcEntity;

    const bind = computed(() => {
        const attrs = {};

        if (unref(useTips)) attrs['element-loading-text'] = unref(tips);
        if (unref(useColor)) attrs['element-loading-background'] = unref(color);

        attrs['element-loading-spinner'] = unref(useIcon)
            ? unref(icon)
            : 'el-empty';

        return attrs;
    });

    return bind;
}

export default LoadBindEntity;
