/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useConfig.js
 * @Author: maggot-code
 * @Date: 2022-08-10 17:49:09
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-10 18:19:26
 * @Description:
 */
import { ConfigEntity } from '../entity/Config.entity';

export function useConfig(config = {}) {
    const mapConfig = ConfigEntity(config);

    return {
        config: mapConfig,
    };
}

export default useConfig;
