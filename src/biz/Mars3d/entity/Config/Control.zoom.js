/*
 * @FilePath: \arcgismap\src\biz\Mars3d\entity\Config\Control.zoom.js
 * @Author: maggot-code
 * @Date: 2022-08-12 16:55:53
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-12 17:15:57
 * @Description:
 */
import ControlZoomJson from '../../shared/config/control.zoom.json';

export function ControlZoomEntity() {
    const config = ControlZoomJson;

    return {
        config,
    };
}

export default ControlZoomEntity;
