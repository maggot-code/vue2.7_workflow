/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\defense\index.js
 * @Author: maggot-code
 * @Date: 2022-07-25 13:53:04
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 13:36:22
 * @Description:
 */
import DefenseModel from './defense.vue';

DefenseModel.install = function (Vue) {
    Vue.component(DefenseModel.__name, DefenseModel);
};

export default DefenseModel;
