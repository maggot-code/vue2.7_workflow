/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\usecase\useComponentNode.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:13:28
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 16:15:06
 * @Description:
 */
import { flow } from 'lodash';

import { NodeEntity } from '../entity/Node.entity';

export function useComponentNode(props) {
    const setupNode = flow([NodeEntity]);

    return setupNode(props);
}

export default useComponentNode;
