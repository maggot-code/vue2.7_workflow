<!--
 * @FilePath: \arcgismap\src\pages\mapview\mapview.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 17:28:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 18:20:08
 * @Description: 
-->
<script setup>
import { onMounted, onBeforeUnmount, unref, ref, watch, shallowRef } from "vue";
import { Map } from "mars3d";
import { useConfig } from "@/biz/Mars3d";

const config = useConfig();
console.log(config);

const mapRefs = ref();
const map = shallowRef(null);

const sceneMode = ref(3);
function setupSceneModeTo2D() {
    sceneMode.value = 2;
}
function setupSceneModeTo3D() {
    sceneMode.value = 3;
}

watch(sceneMode, (mode) => {
    unref(map).setSceneOptions({
        sceneMode: mode
    });
});

onMounted(() => {
    map.value = new Map(unref(mapRefs), {
        scene: {
            sceneMode: unref(sceneMode)
        }
    });
});
onBeforeUnmount(() => {
    unref(map).destroy();
    map.value = null;
});
</script>

<template>
    <div class="map-view">
        <div class="map-container" ref="mapRefs"></div>

        <el-button-group class="map-group">
            <!-- <el-button :disabled="true">{{ modeDescribe }}</el-button>
            <el-button @click="sceneTo3D(map)">切换到3D</el-button>
            <el-button @click="sceneTo2D(map)">切换到2D</el-button>
            <el-button @click="sceneTo25D(map)">切换到2.5D</el-button> -->
            <el-button @click="setupSceneModeTo2D">切换到2D</el-button>
            <el-button @click="setupSceneModeTo3D">切换到3D</el-button>
        </el-button-group>
    </div>
</template>

<style scoped lang='scss'>
.map-view,
.map-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.map-group {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
