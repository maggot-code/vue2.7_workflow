/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\index.js
 * @Author: maggot-code
 * @Date: 2022-07-29 16:09:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-08 16:35:37
 * @Description:
 */
import { useComponent } from './usecase/useComponent';

export * from './shared/props';
export * from './usecase/useComponentNode';
export * from './usecase/useComponentProps';
export * from './usecase/useComponent';
export const defineCustomComponent = useComponent;
