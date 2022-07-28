/*
 * @FilePath: \vue2.7_workflow\src\composable\VNodeKey\index.js
 * @Author: maggot-code
 * @Date: 2022-07-28 13:29:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 13:51:32
 * @Description:
 */
import { provide, inject, unref, ref, computed } from 'vue';
import { v4 } from 'uuid';

const VNodeKeyInjectName = 'vnodeKey';

export function useVNodeKeySetup(injectName = VNodeKeyInjectName) {
    const keyRef = ref(v4());
    const vnodeKey = computed(() => unref(keyRef));

    function updateVNodeKey() {
        keyRef.value = v4();
    }

    const output = {
        keyRef,
        vnodeKey,
        updateVNodeKey,
    };

    provide(injectName, output);

    return output;
}

export function useVNodeKey(injectName = VNodeKeyInjectName) {
    return inject(injectName, {
        vnodeKey: v4(),
        updateVNodeKey: () => {},
    });
}
