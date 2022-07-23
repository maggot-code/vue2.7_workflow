/*
 * @FilePath: /vue2.7_workflow/src/biz/User/index.js
 * @Author: maggot-code
 * @Date: 2022-07-24 01:38:43
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-07-24 02:09:32
 * @Description:
 */
import { provide, inject } from 'vue';
import { v4 } from 'uuid';
import { IdentityEntity } from './Identity.entity';

export function adminIdentity() {
    return IdentityEntity();
}

export function miyunIdentity() {
    return IdentityEntity();
}

export const UserContext = {
    admin: {
        name: '管理员',
        setupIdentity: adminIdentity,
    },
    miyun: {
        name: '密云区管理员',
        setupIdentity: miyunIdentity,
    },
};

export function useUser(user) {
    const { name, setupIdentity } = UserContext[user ?? 'admin'];

    const uid = v4();
    const uname = name;
    const uidentity = setupIdentity();

    const userProps = {
        uid,
        uname,
        uidentity,
    };

    provide('user', userProps);

    return userProps;
}

export function useUserInject() {
    const userProps = inject('user', {});

    return userProps;
}

export default useUser;
