/*
 * @FilePath: /vue2.7_workflow/src/composable/Tree/usecase/useTreeView.js
 * @Author: maggot-code
 * @Date: 2022-08-02 00:03:58
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-02 00:32:28
 * @Description:
 */
import { useAttrs, provide, computed, unref, ref } from 'vue';

export function useTreeView(props) {
    const attrs = useAttrs();
    const isRecursion = ref(false);
    const viewBind = computed(() => ({
        isRecursion: unref(isRecursion),
        ...attrs,
        ...props,
    }));

    const onRecursion = (call) => {
        const recursionProps = call();
        console.log(recursionProps);
    };
    provide(props.nodeKey, viewBind);

    return {
        viewBind,
        onRecursion,
    };
}

export default useTreeView;
