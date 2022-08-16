/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Ready\Ready.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-16 10:41:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 13:38:03
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { toBoolean } from '@/shared/transform';

const marsReady = ref(false);

function setupReady(state = false) {
    marsReady.value = toBoolean(state, false);
    return unref(marsReady);
}

export function ReadyEntity() {
    const ready = computed(() => unref(marsReady));

    function tobeReady() {
        return setupReady(true);
    }
    function tonotReady() {
        return setupReady(false);
    }

    return {
        ready,
        tobeReady,
        tonotReady,
    };
}

export default ReadyEntity;
