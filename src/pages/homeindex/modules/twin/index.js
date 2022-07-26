/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\twin\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:53:15
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:34
 * @Description:
 */
import TwinModel from './twin.vue';

TwinModel.install = function (Vue) {
    Vue.component(TwinModel.__name, TwinModel);
};

export default TwinModel;
