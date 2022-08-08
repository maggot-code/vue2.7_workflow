/*
 * @FilePath: \vue2.7_workflow\src\composable\Screen\usecase\useTransform.js
 * @Author: maggot-code
 * @Date: 2022-08-08 16:05:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:45:43
 * @Description:
 */
import { useTransform as toTransform } from '@/composable/Tree';
import { useComponentNode } from '@/composable/Component';
import { useScreenNode } from './useScreenNode';

export function useTransform() {
    const { setupTree } = toTransform([useComponentNode, useScreenNode]);

    return {
        setupTree,
    };
}
