import { AuthUserType } from '@/shared/lib';
import { makeAutoObservable } from 'mobx';

class UserStore {
  user: AuthUserType = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: AuthUserType) {
    this.user = user;
  }

  clearUser() {
    this.user = null;
  }
}

export default new UserStore();
