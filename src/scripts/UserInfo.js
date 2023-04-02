export default class UserInfo {
    constructor({name, info}) {
      this._nameSelector = name;
      this._infoSelector = info;
      this._name = document.querySelector(this._nameSelector);
      this._info = document.querySelector(this._infoSelector);
    }
  
    getUserInfo() {
      this._nameProfile = this._name.textContent;
      this._infoProfile = this._info.textContent;
      return {name: this._nameProfile, info: this._infoProfile}
    }
  
    setUserInfo({name, job}) {
      this._name.textContent = name;
      this._info.textContent = job;
    }
  }