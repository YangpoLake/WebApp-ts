import request from '../MainService'
import { IPageParams } from './common';

/**
 * 订单Api类
 */
export default class OrderApi {
  /**
   * 分页获取订单
   * @param params 分页数据
   */
  public getOrderByPage(params: IPageParams) {
    return request({
      url: "/order",
      method: "GET",
      params
    });
  }
  
  /**
   * 获取订单详情
   * @param id 订单id
   */
  public getOrderById(id: any) {
    return request({
      url: "/order/" + id,
      method: "GET"
    });
  }
}
