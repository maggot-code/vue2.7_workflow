/*
 * @FilePath: \vue2.7_workflow\src\composable\Tree\usecase\useTransform.js
 * @Author: maggot-code
 * @Date: 2022-07-29 15:21:03
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-29 16:02:04
 * @Description:
 */
import { useNodeSetup } from './useNodeSetup';

const sortToASC = (prev, next) => prev.sort - next.sort;
// const sortToDESC = (prev, next) => next.sort - prev.sort;

export function useTransform(setupExtends = []) {
    function setupNodeToUsable(parent, node, index, _datasource) {
        const tonode = useNodeSetup(
            {
                parent,
                node,
                index,
            },
            setupExtends
        );

        return tonode;
    }

    function setupTree(tree, parent = null) {
        return tree
            .map((node, index, datasource) => {
                const tonode = setupNodeToUsable(
                    parent,
                    node,
                    index,
                    datasource
                );

                if (tonode?.hasChild) {
                    tonode.children = setupTree(tonode.children, tonode);
                }

                return tonode;
            })
            .sort(sortToASC);
    }

    return {
        setupNodeToUsable,
        setupTree,
    };
}

export default useTransform;
