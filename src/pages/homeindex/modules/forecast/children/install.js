/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\children\install.js
 * @Author: maggot-code
 * @Date: 2022-07-28 14:42:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-28 14:45:21
 * @Description:
 */
import MaxRain from './max-rain.vue';
import RadarEchoMap from './radar-echo-map.vue';
import RainForecast from './rain-forecast.vue';
import RainPeakTime from './rain-peak-time.vue';
import RainStartTime from './rain-start-time.vue';
import RainStepTime from './rain-step-time.vue';
import TotalRain from './total-rain.vue';

const components = [
    MaxRain,
    RadarEchoMap,
    RainForecast,
    RainPeakTime,
    RainStartTime,
    RainStepTime,
    TotalRain,
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
