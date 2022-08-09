/*
 * @FilePath: \vue2.7_workflow\src\biz\Screen\usecase\useScreenInject.js
 * @Author: maggot-code
 * @Date: 2022-08-09 10:47:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-08-09 11:12:16
 * @Description:
 */
import { inject } from 'vue';
import { ScreenSymbolName } from '../shared/context';

export function useScreenInject() {
    return inject(ScreenSymbolName);
}

export default useScreenInject;
