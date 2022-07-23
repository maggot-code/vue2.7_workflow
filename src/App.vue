<script setup>
import GridContainer from '@/biz/Grid/view/GridContainer.vue';
import { useUser } from "@/biz/User";

const admin = useUser();
console.log(admin);
</script>

<template>
    <div class="map-container">
        <GridContainer name="RainForecast"></GridContainer>
        <GridContainer name="RealTime"></GridContainer>
        <GridContainer name="Flood"></GridContainer>
        <GridContainer name="Inundation"></GridContainer>
        <GridContainer name="FloodDefence"></GridContainer>
        <GridContainer name="DigitalTwin"></GridContainer>
    </div>
</template>

<style scoped lang='scss'>
.map-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
