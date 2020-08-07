import request from '../MainService';

/**
 * 登录Api类
 */
export default class LoginApi {
  /**
   * 登录
   * @param name 账号
   * @param password 密码
   */
  public login(name: any, password: any) {
    return request({
      url: "/login",
      method: "POST",
      data: {
        name,
        password
      }
    });
  }
}
