/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useScreenProps.js
 * @Author: maggot-code
 * @Date: 2022-08-08 16:32:14
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:37:42
 * @Description:
 */
import { useNodeProps } from '@/composable/Tree';
import { useComponentProps } from '@/composable/Component';
import { ScreenNodeProps } from '../shared/props';

export function useScreenProps() {
    return useNodeProps({
        ...useComponentProps(),
        ...ScreenNodeProps,
    });
}

export default useScreenProps;
