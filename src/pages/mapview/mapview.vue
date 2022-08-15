<!--
 * @FilePath: \arcgismap\src\pages\mapview\mapview.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 17:28:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 18:11:38
 * @Description: 
-->
<script setup>
import { defineMarsMap } from "@/biz/Mars3d";

const { mapRefs, map } = defineMarsMap();
</script>

<template>
    <div class="map-view">
        <div class="map-container" ref="mapRefs"></div>

        <el-button-group class="map-group">
            <!-- <el-button :disabled="true">{{ modeDescribe }}</el-button>
            <el-button @click="sceneTo3D(map)">切换到3D</el-button>
            <el-button @click="sceneTo2D(map)">切换到2D</el-button>
            <el-button @click="sceneTo25D(map)">切换到2.5D</el-button> -->
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
