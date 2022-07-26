<!--
 * @FilePath: \vue2.7_workflow\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 09:17:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 15:25:39
 * @Description: 
-->
<script setup>
import LegendContainer from "@/composable/Legend/view/LegendContainer.vue";
import ProgressContainer from "@/composable/Progress/view/ProgressContainer.vue";
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
