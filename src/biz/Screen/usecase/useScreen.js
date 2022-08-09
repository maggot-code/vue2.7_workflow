/*
 * @FilePath: \vue2.7_workflow\src\biz\Screen\usecase\useScreen.js
 * @Author: maggot-code
 * @Date: 2022-08-09 10:46:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:43:41
 * @Description:
 */
import { onMounted, provide, computed, unref, ref } from 'vue';
import { defineTreeNode } from '@/composable/Tree';
import { ScreenSymbolName } from '../shared/context';
import { toBoolean } from '@/shared/transform';

function initActiveNode(props, hasNode) {
    if (!unref(hasNode)) return props;
    const [first] = props.children;
    return first;
}
function setupToloop(node) {
    return node.hasChild && !node.hasChildOnlyone && node.renderChild;
}

export function useScreen(props, emits) {
    const hasScreenNode = computed(() => toBoolean(setupToloop(props)));
    const screenVisible = ref(false);
    const activeNode = ref(initActiveNode(props, hasScreenNode));
    const validNode = computed(() => {
        if (unref(activeNode).hasChildOnlyone) {
            return unref(activeNode).children[0];
        }

        return unref(activeNode);
    });

    function setupActiveNode(node) {
        if (unref(activeNode).nodeKey === node.nodeKey) return;

        activeNode.value = node;
        screenVisible.value = false;
        emits('change', {
            active: node,
            valid: unref(validNode),
        });
    }

    defineTreeNode(props, {
        toLoop: setupToloop,
    });
    provide(ScreenSymbolName, {
        root: props,
        screenVisible,
        activeNode,
        validNode,
        setupActiveNode,
    });
    onMounted(() => {
        emits('change', {
            active: unref(activeNode),
            valid: unref(validNode),
        });
    });

    return {
        hasScreenNode,
        screenVisible,
        activeNode,
        validNode,
        setupActiveNode,
    };
}

export default useScreen;
