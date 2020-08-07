import request from '../MainService';
import { IPageParams } from './common';

/**
 * Wifi设备数据类
 * @param name wifi设备名称
 * @param device_model 型号信息（{"device_model":{"id":"1"}}）
 * @param brand wifi 设备品牌("brand":{"id":"2"})
 * @param address ip 地址
 * @param admin wifi 设备登录账户
 * @param password wifi 设备登录密码
 * @param asset_type 资产类型
 * @param asset_number 资产编号
 * @param status wifi 设备状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
 */
export interface IWifiDevices {
  /**
   * wifi设备名称
   */
  name: string;

  /**
   * 型号信息（{"device_model":{"id":"1"}}）
   */
  device_model: any;

  /**
   * wifi 设备品牌("brand":{"id":"2"})
   */
  brand: any;

  /**
   * ip 地址
   */
  address: string;

  /**
   * wifi 设备登录账户
   */
  admin: string;

  /**
   * wifi 设备登录密码
   */
  password: string;

  /**
   * 资产类型
   */
  asset_type: number;

  /**
   * 资产编号
   */
  asset_number: string;

  /**
   * wifi 设备状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
   */
  status: number;
}

/**
 * Wifi设备Api类
 */
export default class WifiDevicesApi {
  /**
   * 分页获取Wifi设备数据
   * @param params 分页参数
   */
  public getWifiByPage(params: IPageParams) {
    return request({
      url: "/wifi",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增Wi-Fi设备数据
   * @param data Wifi数据
   */
  public postWifi(data: IWifiDevices) {
    return request({
      url: "/wifi",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除Wifi数据
   * @param id Wi-Fiid
   */
  public deleteWifiById(id: string) {
    return request({
      url: "/wifi/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑Wi-Fi数据
   * @param id Wifi id
   * @param data Wi-Fi数据
   */
  public putWifiById(id: string, data: IWifiDevices) {
    return request({
      url: "/wifi/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取Wi-Fi详情数据
   * @param id Wi-Fi id
   */
  public getWifiById(id: string) {
    return request({
      url: "/wifi/" + id,
      method: "GET"
    });
  }
}
