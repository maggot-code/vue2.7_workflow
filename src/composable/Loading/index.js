/*
 * @FilePath: \vue2.7_workflow\src\composable\Loading\index.js
 * @Author: maggot-code
 * @Date: 2022-07-28 13:18:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 13:52:06
 * @Description:
 */
import {
    provide,
    inject,
    onMounted,
    onBeforeUnmount,
    unref,
    ref,
    computed,
} from 'vue';
import { isBoolean } from 'lodash';

const LoadingInjectName = 'loading';

function setupLoadStatus(status) {
    return isBoolean(status) ? status : false;
}

export function useLoadingSetup(status, injectName = LoadingInjectName) {
    const loadingRef = ref(setupLoadStatus(status));
    const load = computed(() => unref(loadingRef));

    function setupLoad(status) {
        loadingRef.value = setupLoadStatus(status);
    }
    function setupStartLoad() {
        setupLoad(true);
    }
    function setupEndLoad() {
        setupLoad(false);
    }

    const output = {
        load,
        setupLoad,
        setupStartLoad,
        setupEndLoad,
    };

    provide(injectName, output);

    onMounted(() => {
        setupLoad(status);
    });

    onBeforeUnmount(() => {
        setupLoad(status);
    });

    return output;
}

export function useLoading(injectName = LoadingInjectName) {
    return inject(injectName, {
        load: false,
        setupLoad: () => {},
        setupStartLoad: () => {},
        setupEndLoad: () => {},
    });
}
