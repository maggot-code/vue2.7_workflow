/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTreeNode.js
 * @Author: maggot-code
 * @Date: 2022-08-02 15:41:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 17:55:06
 * @Description:
 */
import { provide, useAttrs, computed, unref } from 'vue';
import { NodeInject } from '../shared/inject';

export function useTreeNode(props, handler = NodeInject) {
    const attrs = useAttrs();
    const bind = computed(() => {
        return Object.assign({}, props, attrs);
    });
    function setupAttrs(tonode) {
        return Object.assign({}, unref(bind), tonode);
    }

    const output = {
        bind,
        handler,
        setupAttrs,
    };

    provide(unref(bind).nodeKey, output);

    return output;
}

export default useTreeNode;
