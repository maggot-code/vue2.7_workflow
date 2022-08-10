/*
 * @FilePath: \vue2.7_workflow\src\pages\tabindex\view\hooks\useCheckJump.js
 * @Author: zhangxin
 * @Date: 2022-08-02 15:31:31
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-08-05 10:13:54
 * @Description:
 */

const TESTDATA = {
    render: 'component',
    // window: '/home',
    // dialog: 'component',
};

// open dialog methods
const hanlderDialogJump = () => {
    return false;
};
// open new page methods
const hanlderWindowJump = (url) => {
    window.open(url);
    return false;
};
// render component methods
const hanlderRenderJump = () => {
    return true;
};

const viewRenderRules = {
    dialog: hanlderDialogJump,
    window: hanlderWindowJump,
    render: hanlderRenderJump,
};

export function useCheckJump(tabMap) {
    const checkJump = (index) => {
        const { view } = tabMap[index];
        console.log(view);
        const rules = Object.keys(TESTDATA).map((key) => {
            return viewRenderRules[key] && viewRenderRules[key](TESTDATA[key]);
        });
        return rules.some((item) => item === true);
    };
    return checkJump;
}
