import request from '../MainService';

/**
 * 参数Api类
 */
export default class ParamsApi {
  /**
   * 获取参数详情
   */
  public getParamsInfo() {
    return request({
      url: "/params/info",
      method: "GET"
    });
  }
}
