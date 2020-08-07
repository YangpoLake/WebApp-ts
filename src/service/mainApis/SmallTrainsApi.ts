import request from '../MainService'
import { IPageParams } from './common';

/**
 * 小火车数据类
 * @param name 小火车名称
 * @param device_model 小火车型号信息（{"device_model":{"id":"1"}}）
 * @param group 小火车编组
 * @param photo 小火车照片
 * @param passengers 小火车乘坐人数
 * @param power_form 动力形式
 * @param brand 小火车品牌（ {"brand:{"id":"1"}"} ）
 * @param status 小火车状态（-1:异常,0:正常未使用,1:使用中）
 */
export interface ISmallTrains {
  /**
   * 小火车名称
   */
  name: string;

  /**
   * 小火车型号信息（{"device_model":{"id":"1"}}）
   */
  device_model: any;

  /**
   * 小火车编组
   */
  group?: string;

  /**
   * 小火车照片
   */
  photo?: string;

  /**
   * 小火车乘坐人数
   */
  passengers?: string;

  /**
   * 动力形式
   */
  power_form?: string;

  /**
   * 小火车品牌（ {"brand:{"id":"1"}"} ）
   */
  brand?: any;

  /**
   * 小火车状态（-1:异常,0:正常未使用,1:使用中）
   */
  status?: number;
}

/**
 * 小火车Api类
 */
export default class SmallTrainsApi {
  /**
   * 分页获取小火车数据
   * @param params 分页数据
   */
  public getSmallTrainsByPage(params: IPageParams) {
    return request({
      url: "/small/trains",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增小火车数据
   * @param data 小火车数据
   */
  public postSmallTrains(data: ISmallTrains) {
    return request({
      url: "/small/trains",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除小火车数据
   * @param id 小火车id
   */
  public deleteSmallTrainsById(id: string) {
    return request({
      url: "/small/trains/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑小火车数据
   * @param id 小火车id
   * @param data 小火车数据
   */
  public putSmallTrainsById(id: string, data: ISmallTrains) {
    return request({
      url: "/small/trains/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取小火车详情数据
   * @param id 小火车id
   */
  public getSmallTrainsById(id: string) {
    return request({
      url: "/small/trains/" + id,
      method: "GET"
    });
  }  
}
