import request from '../MainService';
import { IPageParams } from './common';

/**
 * 灯光数据类
 * @param name 灯光名称
 * @param device_model 灯光型号信息（{"device_model":{"id":"1"}}）
 * @param area 灯光所在区域 (调用参数详情接口 item:area)
 * @param asset_type 灯光资产类型
 * @param asset_number 灯光资产编号
 * @param brand 灯光品牌 ({"brand":{"id":"1"}})
 * @param light_x 灯光横坐标
 * @param light_y 灯光纵坐标
 * @param status 灯光状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
 */
export interface ILightDevices {
  /**
   * 灯光名称
   */
  name: string;

  /**
   * 灯光型号信息（{"device_model":{"id":"1"}}）
   */
  device_model: any;

  /**
   * 灯光所在区域 (调用参数详情接口 item:area)
   */
  area: string;

  /**
   * 灯光资产类型
   */
  asset_type: string;

  /**
   * 灯光资产编号
   */
  asset_number: string;

  /**
   * 灯光品牌 ({"brand":{"id":"1"}})
   */
  brand: any;

  /**
   * 灯光横坐标
   */
  light_x: number;

  /**
   * 灯光纵坐标
   */
  light_y: number;

  /**
   * 灯光状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
   */
  status: number;
}

/**
 * 灯光设备Api类
 */
export default class LightDevicesApi {
  /**
   * 分页获取照明设备数据
   * @param params 分页参数
   */
  public getLightDevicesByPage(params: IPageParams) {
    return request({
      url: "/lights",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增照明设备数据
   * @param data 照明设备数据
   */
  public postLightDevices(data: ILightDevices) {
    return request({
      url: "/lights",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除照明设备数据
   * @param id 照明设备id
   */
  public deleteLightDevicesById(id: string) {
    return request({
      url: "/lights/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑照明设备数据
   * @param id 照明设备id
   * @param data 照明设备数据
   */
  public putLightDevicesById(id: string, data: ILightDevices) {
    return request({
      url: "/lights/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取照明设备详情数据
   * @param id 照明设备id
   */
  public getLightDevicesById(id: string) {
    return request({
      url: "/lights/" + id,
      method: "GET"
    });
  }
}

