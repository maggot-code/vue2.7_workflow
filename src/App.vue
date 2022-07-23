<script setup>
import GridContainer from '@/biz/Grid/view/GridContainer.vue';
import BizModules from "@/config/module.conf.js";
import { useUser } from "@/biz/User";

const admin = useUser();
console.log(admin);
</script>

<template>
    <div class="map-container">
        <template v-for="(row, index) in BizModules">
            <GridContainer :index="index" :name="row.name" :module="row.module">
                <component :is="row.component"></component>
            </GridContainer>
        </template>
    </div>
</template>

<style scoped lang='scss'>
.map-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
