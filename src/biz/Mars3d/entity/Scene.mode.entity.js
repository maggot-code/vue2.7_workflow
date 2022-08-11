import { unref, ref, computed } from 'vue';
import { Cesium } from 'mars3d';

const SceneModeTips = {
    [Cesium.SceneMode.SCENE2D]: '2D模式',
    [Cesium.SceneMode.SCENE3D]: '3D模式',
    [Cesium.SceneMode.COLUMBUS_VIEW]: '2.5D模式',
};

export function SceneModeEntity(options = {}) {
    const { modeValue } = options;
    const mode = ref(modeValue ?? Cesium.SceneMode.SCENE3D);
    const modeTips = computed(() => unref(SceneModeTips[unref(mode)]));
    const modeDescribe = computed(() => `当前为${unref(modeTips)}`);
    const modeSwitchTips = computed(() => `已经切换到${unref(modeTips)}`);

    function setupSceneMode(modeValue = Cesium.SceneMode.SCENE3D) {
        mode.value = modeValue;
        return mode;
    }
    function sceneTo2D() {
        return setupSceneMode(Cesium.SceneMode.SCENE2D);
    }
    function sceneTo3D() {
        return setupSceneMode(Cesium.SceneMode.SCENE3D);
    }
    function sceneTo25D() {
        return setupSceneMode(Cesium.SceneMode.COLUMBUS_VIEW);
    }

    return {
        mode,
        modeTips,
        modeDescribe,
        modeSwitchTips,
        setupSceneMode,
        sceneTo2D,
        sceneTo3D,
        sceneTo25D,
    };
}

export default SceneModeEntity;
