/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Control.compass.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:56:38
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 17:15:06
 * @Description:
 */
import ControlCompassJson from '../../shared/config/control.compass.json';

export function ControlCompassEntity() {
    const config = ControlCompassJson;

    return {
        config,
    };
}

export default ControlCompassEntity;
