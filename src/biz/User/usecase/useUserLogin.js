/*
 * @FilePath: \vue2.7_workflow\src\composable\User\usecase\useUserLogin.js
 * @Author: maggot-code
 * @Date: 2022-07-25 14:56:11
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-25 15:55:04
 * @Description:
 */
import AdminUser from '@/assets/json/admin.user.json';
import { UserEntity } from '../entity/user.entity';

export function useUserLogin(_options) {
    // const { username, password } = options;

    // 请求发起
    const { info } = UserEntity(AdminUser.data);

    return {
        user: info,
    };
}

export default useUserLogin;
