import { makeAutoObservable } from 'mobx';
import { UserType } from '@/entities/user';

class UserStore {
  user: UserType = null;
  name = this.user?.name;
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (newUser: UserType) => {
    this.user = newUser;
  };
}

export default new UserStore();
