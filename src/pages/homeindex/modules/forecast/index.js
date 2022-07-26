/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\forecast\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:53:08
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:26
 * @Description:
 */
import ForecastModel from './forecast.vue';

ForecastModel.install = function (Vue) {
    Vue.component(ForecastModel.__name, ForecastModel);
};

export default ForecastModel;
