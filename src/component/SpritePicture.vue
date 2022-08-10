<template>
    <!-- 雪碧图组件 -->
    <div :class="classPrefix">
        <div :class="classPrefix + '_icon'" :style="mapStyle"></div>
    </div>
</template>

<script>
export default {
    name: '',
    mixins: [],
    components: {},
    props: {
        // 横坐标（从0开始）
        row: {
            type: Number,
            default: 0,
        },
        // 列(从0开始)
        column: {
            type: Number,
            default: 0,
        },
    },
    data() {
        //这里存放数据
        return {
            classPrefix: 'qst-tecs-src-common-components-icon_',
            mapStyle: {
                width: 20 + 'px',
                height: 20 + 'px',
                backgroundPosition:
                    -this.row + 'px' + ' ' + -this.column + 'px',
            }, // 默认图标样式
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss" scoped>
.qst-tecs-src-common-components-icon_ {
    display: inline-block;
    cursor: pointer;
    &_icon {
        background-image: url('/src/assets/icon/icon-sprite-picture.png'); /*result.png为合并后的图片*/
        background-repeat: no-repeat;
    }
}
</style>