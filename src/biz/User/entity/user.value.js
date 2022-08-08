/*
 * @FilePath: \vue2.7_workflow\src\composable\User\entity\user.value.js
 * @Author: maggot-code
 * @Date: 2022-07-25 15:00:42
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 15:55:10
 * @Description:
 */
import { cacheGet, cacheSet, getToken, setToken } from 'maggot-utils';

function setupCache(key, def, value = null) {
    if (!value) {
        return {
            key,
            value: cacheGet(key) || def,
        };
    }

    cacheSet(key, value);
    return {
        key,
        value,
    };
}

const userAddvcdKey = 'addvcd';
export const userAddvcd = (val) => setupCache(userAddvcdKey, '', val);

const userTruenameKey = 'truename';
export const userTruename = (val) => setupCache(userTruenameKey, '', val);

const userHnnmKey = 'hnnm';
export const userHnnm = (val) => setupCache(userHnnmKey, '', val);

const userDepartmentidKey = 'departmentid';
export const userDepartmentid = (val) =>
    setupCache(userDepartmentidKey, '', val);

const userDepartmentidnameKey = 'departmentidname';
export const userDepartmentidname = (val) =>
    setupCache(userDepartmentidnameKey, '', val);

const userLayersKey = 'layers';
export const userLayers = (val) => setupCache(userLayersKey, '', val);

const userTokenKey = 'token';
export const userToken = (value = null) => {
    if (!value) {
        return {
            key: userTokenKey,
            value: getToken() || '',
        };
    }

    setToken(value);
    return {
        key: userTokenKey,
        value,
    };
};

export const userValue = {
    [userAddvcdKey]: userAddvcd().value,
    [userTruenameKey]: userTruename().value,
    [userHnnmKey]: userHnnm().value,
    [userDepartmentidKey]: userDepartmentid().value,
    [userDepartmentidnameKey]: userDepartmentidname().value,
    [userLayersKey]: userLayers().value,
    [userTokenKey]: userToken().value,
};

export const userValueMapping = {
    [userAddvcdKey]: userAddvcd,
    [userTruenameKey]: userTruename,
    [userHnnmKey]: userHnnm,
    [userDepartmentidKey]: userDepartmentid,
    [userDepartmentidnameKey]: userDepartmentidname,
    [userLayersKey]: userLayers,
    [userTokenKey]: userToken,
};
