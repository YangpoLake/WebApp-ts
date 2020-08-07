import request from '../MainService';
import { IPageParams } from './common';

/**
 * 游客Api类
 */
export default class CustomerApi {
  /**
   * 分页获取游客列表
   * @param params 分页参数
   */
  public getCustomerByPage(params: IPageParams) {
    return request({
      url: "/customer",
      method: "GET",
      params
    });
  }
  
  /**
   * 获取游客详情
   * @param id 游客id
   */
  public getCustomerById(id: string) {
    return request({
      url: "/customer/" + id,
      method: "GET"
    });
  }
}
