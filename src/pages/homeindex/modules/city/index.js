/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\city\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:52:59
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:18
 * @Description:
 */
import CityModel from './city.vue';

CityModel.install = function (Vue) {
    Vue.component(CityModel.__name, CityModel);
};

export default CityModel;
