<!--
 * @FilePath: \arcgismap\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 09:17:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-11 15:16:27
 * @Description: 
-->
<script setup>
import LegendContainer from "@/biz/Legend/view/LegendContainer.vue";
import ProgressContainer from "@/biz/Progress/view/ProgressContainer.vue";
</script>

<template>
    <progress-container>
        <LegendContainer>
            <router-view></router-view>
        </LegendContainer>
    </progress-container>
</template>

<style scoped lang='scss'>
</style>
