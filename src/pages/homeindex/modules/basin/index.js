/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\basin\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:49:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:14
 * @Description:
 */
import BasinModel from './basin.vue';

BasinModel.install = function (Vue) {
    Vue.component(BasinModel.__name, BasinModel);
};

export default BasinModel;
