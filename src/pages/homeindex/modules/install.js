/*
 * @FilePath: \vue2.7_workflow\src\pages\homeindex\modules\install.js
 * @Author: maggot-code
 * @Date: 2022-07-26 13:26:21
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 17:12:31
 * @Description:
 */
import { default as BasinModel } from './basin';
import { default as DefenseModel } from './defense';
import { default as ForecastModel } from './forecast';
import { default as CityModel } from './city';
import { default as TwinModel } from './twin';
import { default as RealTimeModel } from './real-time';

export default [
    BasinModel,
    DefenseModel,
    ForecastModel,
    CityModel,
    TwinModel,
    RealTimeModel,
];
