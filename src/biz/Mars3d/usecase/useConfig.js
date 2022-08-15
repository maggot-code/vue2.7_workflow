/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useConfig.js
 * @Author: maggot-code
 * @Date: 2022-08-12 17:21:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 11:11:33
 * @Description:
 */
import { unref } from 'vue';
import { ConfigEntity } from '../entity/Config';

export function useConfig() {
    const { config } = ConfigEntity();

    return {
        config: unref(config),
    };
}

export default useConfig;
