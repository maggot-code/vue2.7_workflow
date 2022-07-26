/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\install.js
 * @Author: maggot-code
 * @Date: 2022-07-26 13:26:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 15:16:37
 * @Description:
 */
import { default as BasinModel } from './basin';
import { default as DefenseModel } from './defense';
import { default as ForecastModel } from './forecast';
import { default as CityModel } from './city';
import { default as TwinModel } from './twin';
import { default as RealTimeModel } from './real-time';

const components = [
    BasinModel,
    DefenseModel,
    ForecastModel,
    CityModel,
    TwinModel,
    RealTimeModel,
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
