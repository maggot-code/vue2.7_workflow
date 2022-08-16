import {} from 'vue';
import { thing } from 'mars3d';
import { MarsRotatePointSymbolName } from '../../shared/context';

const config = {
    id: MarsRotatePointSymbolName,
    direction: false,
    time: 60,
};

export function RotatePointEntity() {
    const rotatePoint = new thing.RotatePoint(config);

    return {
        rotatePoint,
        startRotate: rotatePoint.start,
        stopRotate: rotatePoint.stop,
    };
}

export default RotatePointEntity;
