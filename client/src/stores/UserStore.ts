import { observable } from "mobx";

type UserStoreType = {
  userId: string;
  getUserId: () => string;
  setUserId: (id: string) => void;

  userInfo: object;
  getUserInfo: () => object;
  setUserInfo: (userInfo: object) => void;
};

const UserStore: UserStoreType = observable({
  userId: '',
  getUserId() {
    return this.userId;
  },
  setUserId(id: string) {
    this.userId = id;
  },

  userInfo: {},
  getUserInfo() {
    return this.userInfo;
  },
  setUserInfo(userInfo: object) {
    this.userInfo = userInfo;
  }
});

export default UserStore;
