/*
 * @FilePath: \arcgismap\src\biz\Mars3d\usecase\useCamera.js
 * @Author: maggot-code
 * @Date: 2022-08-15 13:53:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-15 17:52:53
 * @Description:
 */
import { CameraAnimationEntity } from '../entity/Camera/Camera.animation';
import { CameraRotateEntity } from '../entity/Camera/Camera.rotate';
import { CameraRotatepointEntity } from '../entity/Camera/Camera.rotatepoint';
import { CameraViewpointEntity } from '../entity/Camera/Camera.viewpoint';
import { CameraBookmarkEntity } from '../entity/Camera/Camera.bookmark';

export function useCamera(mapview) {
    const animation = CameraAnimationEntity(mapview);
    const rotate = CameraRotateEntity(mapview);
    const rotatePoint = CameraRotatepointEntity(mapview);
    const viewPoint = CameraViewpointEntity(mapview);
    const bookmark = CameraBookmarkEntity(mapview);

    return {
        map: mapview,
        animation,
        rotate,
        rotatePoint,
        viewPoint,
        bookmark,
    };
}

export default useCamera;
