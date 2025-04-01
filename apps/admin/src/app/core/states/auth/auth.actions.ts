import { AuthLoginBody } from '@dominos/core';

export class AuthLogin {
    static readonly type = '[Auth] login user to platform';

    constructor(public body: AuthLoginBody) { }
}