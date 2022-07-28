/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\usecase\useComponentRender.js
 * @Author: maggot-code
 * @Date: 2022-07-28 13:16:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 14:42:10
 * @Description:
 */
import {
    provide,
    onBeforeUnmount,
    unref,
    ref,
    shallowRef,
    computed,
} from 'vue';
import { isString, isObject } from 'lodash';

import { useVNodeKeySetup } from '@/composable/VNodeKey';
import { useLoadingSetup } from '@/composable/Loading';
import { useComponentSetup } from './useComponentSetup';

const ComponentInjectName = 'component';

export function useComponentRender(modules, injectName = ComponentInjectName) {
    const vnodeKey = useVNodeKeySetup();
    const loading = useLoadingSetup();
    const setupGridComponent = useComponentSetup(modules);
    const nameRef = ref('unknow');
    const metaRef = shallowRef({});

    const componentBind = computed(() => {
        return {
            is: unref(nameRef),
            meta: unref(metaRef),
        };
    });

    function setupComponentName(bindOptions) {
        const { name } = bindOptions;
        if (!isString(name)) return;

        nameRef.value = setupGridComponent(name);
    }
    function setupComponentMeta(bindOptions) {
        const { meta } = bindOptions;
        if (!isObject(meta)) return;

        metaRef.value = meta;
    }
    function setupComponentBind(bindOptions) {
        setupComponentName(bindOptions);
        setupComponentMeta(bindOptions);
    }

    const output = {
        ...vnodeKey,
        ...loading,
        componentBind,
        setupComponentName,
        setupComponentMeta,
        setupComponentBind,
    };

    provide(injectName, output);

    onBeforeUnmount(() => {
        setupComponentBind({
            name: 'unknow',
            meta: {},
        });
    });

    return output;
}

export default useComponentRender;
