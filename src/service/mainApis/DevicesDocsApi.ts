import request from '../MainService';
import { IPageParams } from './common';

/**
 * 设备文档数据类
 * @param device_model 设备信息({"device_model":{"id":"1"}})
 * @param instruction_manual_file 说明书(文件)
 * @param instruction_manual 说明书（录入）
 * @param maintenance_manual_file 保养手册（文件）
 * @param maintenance_manual 保养手册（录入）
 * @param emergency_treatment_file 应急处理方案（文件）
 * @param emergency_treatment 应急处理方案（录入)
 */
export interface IDevicesDocs {
  /**
   * 设备信息({"device_model":{"id":"1"}})
   */
  device_model?: any;

  /**
   * 说明书(文件)
   */
  instruction_manual_file?: string;

  /**
   * 说明书（录入）
   */
  instruction_manual?: string;

  /**
   * 保养手册（文件）
   */
  maintenance_manual_file?: string;

  /**
   * 保养手册（录入）
   */
  maintenance_manual?: string;

  /**
   * 应急处理方案（文件）
   */
  emergency_treatment_file?: string;

  /**
   * 应急处理方案（录入)
   */
  emergency_treatment?: string;
}

/**
 * 设备文档Api类
 */
export default class DevicesDocsApi {
  /**
   * 分页获取设备数据
   * @param params 分页接口
   */
  public getDevicesDocsByPage(params: IPageParams) {
    return request({
      url: "/devices/docs",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增设备文档数据
   * @param data 设备文档数据
   */
  public postDevicesDocs(data: IDevicesDocs) {
    return request({
      url: "/devices/docs",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除设备文档数据
   * @param id 设备文档id
   */
  public deleteDevicesDocsById(id: string) {
    return request({
      url: "/devices/docs/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑设备文档数据
   * @param id 设备文档id
   * @param data 设备文档数据
   */
  public putDevicesDocsById(id: string, data: IDevicesDocs) {
    return request({
      url: "/devices/docs/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取设备文档详情
   * @param id 设备文档id
   */
  public getDevicesDocsById(id: string) {
    return request({
      url: "/devices/docs/" + id,
      method: "GET"
    });
  }
}
