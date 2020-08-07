import request from '../MainService';
import { IPageParams } from './common';

/**
 * 观光车数据类
 * @param name 观光车名称
 * @param device_model 观光车型号信息（{"device_model":{"id":"1"}}）
 * @param numbering 观光车编号
 * @param photo 观光车图片
 * @param brand 观光车品牌("brand":{"id":"2"})
 * @param status 观光车状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
 */
export interface ITourCars {
  /**
   * 观光车名称
   */
  name: string;

  /**
   * 观光车型号信息（{"device_model":{"id":"1"}}）
   */
  device_model: any;

  /**
   * 观光车编号
   */
  numbering: number;

  /**
   * 观光车图片
   */
  photo?: string;

  /**
   * 观光车品牌("brand":{"id":"2"})
   */
  brand?: any;

  /**
   * 观光车状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
   */
  status?: number;
}

/**
 * 观光车Api类
 */
export default class TourCarsApi {
  /**
   * 分页获取观光车数据
   * @param params 分页参数
   */
  public getTourCarsByPage(params: IPageParams) {
    return request({
      url: "/tour/cars",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增观光车数据
   * @param data 观光车数据
   */
  public postTourCars(data: ITourCars) {
    return request({
      url: "/tour/cars",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除观光车数据
   * @param id 观光车id
   */
  public deleteTourCarsById(id: string) {
    return request({
      url: "/tour/cars/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑观光车数据
   * @param id 观光车id
   * @param data 观光车数据
   */
  public putTourCarsById(id: string, data: ITourCars) {
    return request({
      url: "/tour/cars/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取观光车详情数据
   * @param id 观光车id
   */
  public getTourCarsById(id: string) {
    return request({
      url: "/tour/cars/" + id,
      method: "GET"
    });
  }
}
