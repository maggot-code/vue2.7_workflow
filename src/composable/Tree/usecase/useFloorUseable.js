/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useFloorUseable.js
 * @Author: maggot-code
 * @Date: 2022-07-25 17:06:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 10:17:34
 * @Description:
 */
import { NodeEntity } from '../entity/Node.entity';

export function useFloorUseable(datasource = []) {
    return {
        datasource,
        complete: datasource
            .map(NodeEntity)
            .sort((prev, next) => prev.sort - next.sort),
    };
}

export default useFloorUseable;
