/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useEvent.js
 * @Author: maggot-code
 * @Date: 2022-08-15 16:24:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 17:29:23
 * @Description:
 */
import { onMounted, onBeforeUnmount, unref } from 'vue';
import { isFunction, flattenDeep } from 'lodash';

function toHandlers(args) {
    return flattenDeep(args).filter(isFunction);
}

export function useEventOnce(target, type, ...args) {
    onMounted(() => {
        toHandlers(args).forEach((func) => unref(target).once(type, func));
    });
}

export function useEvent(target, type, ...args) {
    const handlers = toHandlers(args);

    onMounted(() => {
        handlers.forEach((func) => unref(target).on(type, func));
    });

    onBeforeUnmount(() => {
        handlers.forEach((func) => unref(target).off(type, func));
    });

    return target;
}

export default useEvent;
