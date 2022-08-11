/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Scene.camera.entity.js
 * @Author: maggot-code
 * @Date: 2022-08-11 15:33:46
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 15:59:02
 * @Description:
 */
import { unref, ref, computed } from 'vue';
import { toBoolean } from '@/shared/transform';

function setupCamera(options) {
    const { key, value, label } = options;

    const state = ref(toBoolean(value, true));
    const stateTips = computed(() => {
        const prefix = unref(state) ? '开启' : '关闭';
        return `已${prefix}用户${label}`;
    });
    function setupCameraState(mapview, value) {
        if (value === unref(state)) return unref(mapview);

        state.value = toBoolean(value, true);
        return unref(mapview).setCameraOptions({ [key]: unref(state) });
    }
    function switchState(mapview) {
        return setupCameraState(mapview, !unref(state));
    }
    function toEnable(mapview) {
        return setupCameraState(mapview, true);
    }
    function toDisable(mapview) {
        return setupCameraState(mapview, false);
    }

    return {
        key,
        label,
        state,
        stateTips,
        setupCameraState,
        switchState,
        toEnable,
        toDisable,
    };
}

function rotateCamera(value) {
    const key = 'enableRotate';
    const label = '旋转相机';
    return setupCamera({ key, label, value });
}
function translateCamera(value) {
    const key = 'enableTranslate';
    const label = '平移相机';
    return setupCamera({ key, label, value });
}
function tiltCamera(value) {
    const key = 'enableTilt';
    const label = '倾斜相机';
    return setupCamera({ key, label, value });
}
function zoomCamera(value) {
    const key = 'enableZoom';
    const label = '缩放相机';
    return setupCamera({ key, label, value });
}

export function SceneCameraEntity() {
    const enableRotate = rotateCamera();
    const enableTranslate = translateCamera();
    const enableTilt = tiltCamera();
    const enableZoom = zoomCamera();

    const config = computed(() => ({
        [enableRotate.key]: unref(enableRotate.state),
        [enableTranslate.key]: unref(enableTranslate.state),
        [enableTilt.key]: unref(enableTilt.state),
        [enableZoom.key]: unref(enableZoom.state),
    }));
    const cameraTips = computed(() => ({
        [enableRotate.key]: unref(enableRotate.stateTips),
        [enableTranslate.key]: unref(enableTranslate.stateTips),
        [enableTilt.key]: unref(enableTilt.stateTips),
        [enableZoom.key]: unref(enableZoom.stateTips),
    }));

    return {
        config,
        cameraTips,
        enableRotate,
        enableTranslate,
        enableTilt,
        enableZoom,
    };
}

export default SceneCameraEntity;
