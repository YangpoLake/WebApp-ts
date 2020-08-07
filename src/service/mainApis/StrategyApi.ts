import request from '../MainService'
import { IPageParams } from './common';

/**
 * 攻略数据类
 * @param title 攻略名称
 * @param image_url 攻略图片
 * @param info 攻略简介
 * @param details 攻略详情
 * @param sort 排序，越大越往前，默认值: 10
 */
export interface IStrategy {
  title?: string;
  image_url?: string;
  info?: string;
  details?: string;
  sort?: number;
}

/**
 * 攻略Api类
 */
export default class StrategyApi {
  /**
   * 分页获取攻略数据
   * @param params 分页参数
   */
  public getStrategyByPage(params: IPageParams) {
    return request({
      url: "/strategy",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增攻略数据
   * @param data 攻略数据
   */
  public postStrategy(data: IStrategy) {
    return request({
      url: "/strategy",
      method: "POST",
      data
    });
  }
  
  public deleteStrategyById(id: number) {
    return request({
      url: "/strategy/" + id,
      method: "DELETE"
    });
  }
  
  public putStrategyById(id: number, data: IStrategy) {
    return request({
      url: "/strategy/" + id,
      method: "PUT",
      data
    });
  }
  
  public getStrategyById(id: number) {
    return request({
      url: "/strategy/" + id,
      method: "GET"
    });
  }
}

