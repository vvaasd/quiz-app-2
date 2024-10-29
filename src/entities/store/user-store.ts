import { AuthUserType } from '@/shared/lib';
import { makeAutoObservable } from 'mobx';

class UserStore {
  user: AuthUserType = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: AuthUserType) {
    this.user = user;
    console.log(user); //! убрать на следующем задании
  }
  clearUser() {
    this.user = null;
    console.log(this.user); //! убрать в следующем задании
  }
}

export default new UserStore();
