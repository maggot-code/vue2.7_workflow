/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\real-time\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:53:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:30
 * @Description:
 */
import RealTimeModel from './real-time.vue';

RealTimeModel.install = function (Vue) {
    Vue.component(RealTimeModel.__name, RealTimeModel);
};

export default RealTimeModel;
