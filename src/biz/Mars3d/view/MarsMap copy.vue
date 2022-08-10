<!--
 * @FilePath: \arcgismap\src\biz\Mars3d\view\MarsMap copy.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 17:52:06
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-10 16:24:24
 * @Description: 
-->
<script setup>
import { onMounted, onBeforeUnmount, unref, ref } from "vue";
import { Map, Cesium, EventType } from "mars3d";
import MarsMapConfig from "../shared/config/mars3d.conf.json";

let mapview;
let previousTime;
const mapRefs = ref();

// 地球旋转
function map_onClockTick() {
    const spinRate = 1;

    const currentTime = mapview.clock.currentTime.secondsOfDay;
    const delta = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
    mapview.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta);
}

function setSceneCameraControllerOptions(name, value) {
    const options = { cameraController: {} }
    options.cameraController[name] = value

    console.log("更新了地图参数", options)
    mapview.setSceneOptions(options)
}

onMounted(() => {
    mapview = new Map(unref(mapRefs), MarsMapConfig);
    mapview.on(EventType.clockTick, map_onClockTick);
    setSceneCameraControllerOptions("enableZoom", false);
    setSceneCameraControllerOptions("enableTranslate", false);
    setSceneCameraControllerOptions("enableTilt", false);
    setSceneCameraControllerOptions("enableRotate", false);
    previousTime = mapview.clock.currentTime.secondsOfDay;
});

onBeforeUnmount(() => {
    mapview.off(EventType.clockTick, map_onClockTick);
});

</script>

<template>
    <div class="mars-map" ref="mapRefs"></div>
</template>

<style scoped lang='scss'>
.mars-map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
