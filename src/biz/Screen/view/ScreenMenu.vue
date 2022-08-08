<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenMenu.vue
 * @Author: maggot-code
 * @Date: 2022-08-02 16:57:47
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 17:03:21
 * @Description: 
-->
<script setup>
import { useScreenProps } from "../usecase/useScreenProps";

const props = defineProps(useScreenProps());
console.log(props);
</script>

<template>
    <h1>screen menu</h1>
</template>

<style scoped lang='scss'>
</style>
