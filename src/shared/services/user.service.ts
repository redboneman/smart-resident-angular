import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    public tokenStatus: 'ready' | 'pending' | undefined;
    public user: User | undefined;
}

export class User {
    constructor(
        public readonly user: UserModel
    ) {
    }

    public logOut() {
        console.log('logout');
    }
}

export interface UserModel {
    _id: string,
    email: string,
    firstName: string,
    lastName: string,
    image?: string,
    rights: {
        admin: boolean,
        owner: boolean,
        realEstateCompanies: boolean,
        _id: string
    }
}
