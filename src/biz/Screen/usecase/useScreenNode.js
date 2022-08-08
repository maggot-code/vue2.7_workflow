/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenNode.js
 * @Author: maggot-code
 * @Date: 2022-08-08 16:27:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:48:32
 * @Description:
 */
import { flow } from 'lodash';

import { NodeEntity } from '../entity/Node.entity';

export function useScreenNode(props) {
    const setupNode = flow([NodeEntity]);

    return setupNode(props);
}

export default useScreenNode;
