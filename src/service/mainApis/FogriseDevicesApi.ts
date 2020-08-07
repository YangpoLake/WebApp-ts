import request from '../MainService';
import { IPageParams } from './common';

/**
 * 雾升设备数据类
 * @param name 雾升设备名称
 * @param device_model 雾升设备型号信息（{"device_model":{"id":"1"}}）
 * @param area 雾升设备所在区域 (调用参数详情接口 item:area)
 * @param brand 雾升设备所属品牌 ({"brand:{"id":"1"}"})
 * @param fog_rise_x 雾升设备横坐标
 * @param fog_rise_y 雾升设备纵坐标
 * @param status 雾升设备状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
 */
export interface IFogriseDevices {
  /**
   * 雾升设备名称
   */
  name?: string;

  /**
   * 雾升设备型号信息（{"device_model":{"id":"1"}}）
   */
  device_model?: any;

  /**
   * 雾升设备所在区域 (调用参数详情接口 item:area)
   */
  area?: number;

  /**
   * 雾升设备所属品牌 ({"brand:{"id":"1"}"})
   */
  brand?: any;

  /**
   * 雾升设备横坐标
   */
  fog_rise_x?: number;

  /**
   * 雾升设备纵坐标
   */
  fog_rise_y?: number;

  /**
   * 雾升设备状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
   */
  status?: number;
}

/**
 * 雾霜设备Api类
 */
export default class FogriseDevicesApi {
  /**
   * 分页获取雾霜设备数据
   * @param params 分页数据
   */
  public getFogriseDevicesByPage(params: IPageParams) {
    return request({
      url: "/fog/rises",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增雾霜设备数据
   * @param data 雾霜设备数据
   */
  public postFogriseDevices(data: IFogriseDevices) {
    return request({
      url: "/fog/rises",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除雾霜设备数据
   * @param id 雾霜设备id
   */
  public deleteFogriseDevicesById(id: string) {
    return request({
      url: "/fog/rises/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑雾霜设备数据
   * @param id 雾霜设备id
   * @param data 雾霜设备数据
   */
  public putFogriseDevicesById(id: string, data: IFogriseDevices) {
    return request({
      url: "/fog/rises/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取雾霜设备详情
   * @param id 雾霜设备id
   */
  public getFogriseDevicesById(id: string) {
    return request({
      url: "/fog/rises/" + id,
      method: "GET"
    });
  }
}
