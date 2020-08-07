import request from '../MainService';
import { IPageParams } from './common';

/**
 * 设备型号数据类
 * @param name 设备型号名称
 * @param brand 品牌 ({"brand":{"id":1}})
 * @param responsible 责任人id({"responsible":[1,2,3,4]})
 * @param maintenance_cycle 维护周期（天）
 */
export interface IDevicesModel {
  /**
   * 设备型号名称
   */
  name: string;

  /**
   * 品牌 ({"brand":{"id":1}})
   */
  brand: any;

  /**
   * 责任人id({"responsible":[1,2,3,4]})
   */
  responsible: Array<string>;

  /**
   * 维护周期（天）
   */
  maintenance_cycle: number;
}

/**
 * 设备型号Api类
 */
export default class DevicesModelApi {
  /**
   * 分页获取设备型号数据
   * @param params 分页数据
   */
  public getDevicesModelByPage(params: IPageParams) {
    return request({
      url: "/devices/models",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增设备型号数据
   * @param data 设备型号数据
   */
  public postDevicesModel(data: IDevicesModel) {
    return request({
      url: "/devices/models",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除设备型号
   * @param id 设备型号id
   */
  public deleteDevicesModelById(id: string) {
    return request({
      url: "/devices/models/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑设备型号
   * @param id 设备型号id
   * @param data 设备型号数据
   */
  public putDevicesModelById(id: string, data: IDevicesModel) {
    return request({
      url: "/devices/models/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取设备型号详细数据
   * @param id 设备型号id
   */
  public getDevicesModelById(id: string) {
    return request({
      url: "/devices/models/" + id,
      method: "GET"
    });
  }
  
  /**
   * 获取设备型号下的所有用户
   */
  public getDevicesModelAllUsers() {
    return request({
      url: "/devices/all/users",
      method: "GET"
    });
  }
}
