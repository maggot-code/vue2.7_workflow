/*
 * @FilePath: \vue2.7_workflow\src\composable\Component\usecase\useComponentSetup.js
 * @Author: maggot-code
 * @Date: 2022-07-26 15:18:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-26 15:19:35
 * @Description:
 */
export function useComponentSetup(components = {}) {
    return (name) => components[name] || 'unknow';
}

export default useComponentSetup;
