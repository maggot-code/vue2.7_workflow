import { userValueMapping, userValue } from './user.value';

function setupUserInfo(other = {}) {
    const info = {};

    Object.keys(userValue).forEach((ukey) => {
        const uvalue = other[ukey];

        if (uvalue) {
            const handler = userValueMapping[ukey];
            const { key, value } = handler(other[ukey]);
            info[key] = value;
        } else {
            info[ukey] = userValue[ukey];
        }
    });

    return info;
}

function verifyUser(user) {
    console.log(user.token);
    return false;
}

export function UserEntity(other) {
    const info = setupUserInfo(other ?? {});

    return {
        info,
        verify: verifyUser,
    };
}

export default UserEntity;
