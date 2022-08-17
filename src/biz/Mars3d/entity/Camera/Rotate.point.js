import { unref } from 'vue';
import { thing } from 'mars3d';

const rotatePoint = new thing.RotatePoint({
    direction: false,
    time: 60,
});

export function RotatePointEntity(mapview) {
    function bind() {
        if (unref(mapview).hasThing(rotatePoint)) return;

        unref(mapview).addThing(rotatePoint);
    }
    function unbind() {
        if (!unref(mapview).hasThing(rotatePoint)) return;

        rotatePoint.isStart && rotatePoint.stop();
        unref(mapview).removeThing(rotatePoint, true);
    }

    return {
        rotatePoint,
        bind,
        unbind,
    };
}

export default RotatePointEntity;
