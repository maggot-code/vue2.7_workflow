<!--
 * @FilePath: \arcgismap\src\pages\mapview\mapview.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 17:28:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-16 17:21:21
 * @Description: 
-->
<script setup>
import { defineMarsMap } from "@/biz/Mars3d";

const { mapRefs, map, mapUsable, mapload, mapLoadbind } = defineMarsMap();

function getCenter() {
    console.log(map.value.getCenter());
}
</script>

<template>
    <div class="map-view">
        <div class="map-container" ref="mapRefs" v-loading="mapload" v-bind="mapLoadbind"></div>

        <el-button-group class="map-group">
            <!-- <el-button :disabled="true">{{ modeDescribe }}</el-button>
            <el-button @click="sceneTo3D(map)">切换到3D</el-button>
            <el-button @click="sceneTo2D(map)">切换到2D</el-button>
            <el-button @click="sceneTo25D(map)">切换到2.5D</el-button> -->
            <el-button @click="getCenter">获取相机中心</el-button>
        </el-button-group>

        <router-view class="map-view-router" v-if="mapUsable"></router-view>
    </div>
</template>

<style scoped lang='scss'>
.map-view,
.map-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.map-view-router {
    position: absolute;
    z-index: 3000;
}

.map-group {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3000;
}
</style>
