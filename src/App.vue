<!--
 * @FilePath: \vue2.7_workflow\src\App.vue
 * @Author: maggot-code
 * @Date: 2022-07-25 09:17:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 15:53:42
 * @Description: 
-->
<script setup>
import { useUserLogin } from "@/composable/User";
const { user } = useUserLogin();
console.log(user);
</script>

<template>
    <div class="map-container">
        <h1>App</h1>
    </div>
</template>

<style scoped lang='scss'>
.map-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
