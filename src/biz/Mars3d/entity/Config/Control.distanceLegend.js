/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Control.distanceLegend.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:57:13
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 17:16:35
 * @Description:
 */
import ControlDistanceLegendJson from '../../shared/config/control.distanceLegend.json';

export function ControlDistanceLegendEntity() {
    const config = ControlDistanceLegendJson;

    return {
        config,
    };
}

export default ControlDistanceLegendEntity;
