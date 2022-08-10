<!--
 * @FilePath: \arcgismap\src\pages\mapview\mapview.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 17:28:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-10 18:21:24
 * @Description: 
-->
<script setup>
import { onMounted, onBeforeUnmount, unref, ref } from "vue";
import { Map } from "mars3d";
import { useConfig } from "@/biz/Mars3d";
const { config } = useConfig();
console.log(config);
const mapRefs = ref();
let map;

onMounted(() => {
    map = new Map(unref(mapRefs, config));
});
onBeforeUnmount(() => {
    map.destroy();
    map = null;
});
</script>

<template>
    <div class="map-view" ref="mapRefs"></div>
</template>

<style scoped lang='scss'>
.map-view {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
