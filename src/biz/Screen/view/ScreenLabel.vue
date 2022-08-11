<!--
 * @FilePath: \vue2.7_workflow\src\biz\Screen\view\ScreenLabel.vue
 * @Author: maggot-code
 * @Date: 2022-08-09 10:40:30
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 13:34:11
 * @Description: 
-->
<script setup>
defineProps({
    label: {
        type: [String, Number],
        default: '屏幕标签',
    },
});
</script>

<template>
    <div class="screen-label">
        <!-- 雪碧图测试 -->
        <!-- <icon :row="10" :column="10"></icon> -->
        <p><i></i>{{ label }}<a class="screen-label-more">更多</a></p>
    </div>
</template>

<style scoped lang='scss'>
.screen-label {
    font-size: 14px;
    line-height: 25px;
    color: #fff;
    background: url('@/assets/images/gif/beijing.gif');
    position: relative;
}
.screen-label p {
    padding: 5px;
    cursor: pointer; //鼠标变手
    user-select: none; //禁止复制
}
.screen-label i {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fff;
    position: relative;
    top: 5px;
    margin-right: 8px;
    border-radius: 30px;
}
.screen-label::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(0, #afc4c2, transparent);
    border-left: 30px solid #afc4c2;
    box-sizing: border-box;
}
.screen-label::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(0, #afc4c2, transparent);
    border-left: 30px solid #afc4c2;
    box-sizing: border-box;
}

.screen-label-more {
    display: inline-block;
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 13px;
    background-color: #0ec2f5;
    color: #fff;
    width: 48px;
    height: 20px;
    line-height: 21px;
    text-align: center;
    border-radius: 5px;
    letter-spacing: 1px;
    overflow: hidden;
}
.screen-label-more::before {
    content: '';

    display: block;

    width: 25px;

    height: 20px;

    background: rgba(255, 255, 255, 0.5);

    transform: skewX(-25deg);

    position: absolute;

    left: -45px;

    animation: guang infinite 1.2s ease-in;
}

@keyframes guang {
    50% {
        left: -75px;
    }

    100% {
        left: 70px;
    }
}

.screen-label-more:hover {
    background-color: #47ea1b;
    color: #fff;
}
</style>
