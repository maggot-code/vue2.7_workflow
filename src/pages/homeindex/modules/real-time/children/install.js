/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\children\install.js
 * @Author: maggot-code
 * @Date: 2022-07-29 11:11:07
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 11:20:17
 * @Description:
 */
import RainDiff from './rain-diff.vue';
import RainStation from './rain-station.vue';
import RealIsosurface from './real-isosurface.vue';
import RealTimeData from './real-time-data.vue';
import ReservoirStation from './reservoir-station.vue';
import RiverStation from './river-station.vue';
import SessionRain from './session-rain.vue';
import VideoStation from './video-station.vue';

const components = [
    RainDiff,
    RainStation,
    RealIsosurface,
    RealTimeData,
    ReservoirStation,
    RiverStation,
    SessionRain,
    VideoStation,
];

// 定义 install 方法
const installs = function (Vue) {
    if (installs.installed) return;
    installs.installed = true;
    // 遍历注册所有控件
    components.map((component) => Vue.component(component.__name, component));
};

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
    installs(window.Vue);
}

export const modules = {};
components.forEach((component) => {
    modules[component.__name] = component;
});

export default {
    installs,
};
