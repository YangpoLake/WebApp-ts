import request from '../MainService';
import { IPageParams } from './common';

/**
 * 新增活动数据类
 * @param title 活动名称
 * @param image_url 活动图片
 * @param info 活动简介
 * @param details 活动详情
 * @param sort 排序，越大越往前，选填字段
 */
export interface IPostActivity {
  /**
   * 活动名称
   */
  title: string;

  /**
   * 活动图片
   */
  image_url: string;

  /**
   * 活动简介
   */
  info: string;

  /**
   * 活动详情
   */
  details: string;

  /**
   * 排序，越大越往前，选填字段
   * 默认值: 10
   */
  sort?: number
}

/**
 * 编辑活动数据类
 * @param title 活动名称，选填字段，不填则不做修改
 * @param image_url 活动图片，选填字段，不填则不做修改
 * @param info 活动简介，选填字段，不填则不做修改
 * @param details 活动详情，选填字段，不填则不做修改
 * @param sort 排序，越大越往前，选填字段，不填则不做修改
 */
export interface IPutActivity {
  /**
   * 活动名称，选填字段，不填则不做修改
   */
  title?: string;

  /**
   * 活动图片，选填字段，不填则不做修改
   */
  image_url?: string;

  /**
   * 活动简介，选填字段，不填则不做修改
   */
  info?: string;

  /**
   * 活动详情，选填字段，不填则不做修改
   */
  details?: string;

  /**
   * 排序，越大越往前，选填字段
   * 不填则不做修改
   */
  sort?: number
}

/**
 * 活动Api类
 */
export default class ActivityApi {
  /**
   * 获取活动分页列表
   * @param params 通用分页参数
   */
  public getActivityByPage(params: IPageParams) {
    return request({
      url: "/activity",
      method: "GET",
      params
    });
  }

  /**
   * 新增活动
   * @param data 活动数据
   */
  public postActivity(data: IPostActivity) {
    return request({
      url: "/activity",
      method: "POST",
      data
    });
  }

  /**
   * 删除活动
   * @param id 活动id
   */
  public deleteActivityById(id: any) {
    return request({
      url: "/activity/" + id,
      method: "DELETE"
    });
  }

  /**
   * 编辑活动
   * @param id 活动id
   * @param data 活动数据
   */
  public putActivityById(id: string, data: IPutActivity) {
    return request({
      url: "/activity/" + id,
      method: "PUT",
      data
    });
  }

  /**
   * 获取活动详情
   * @param id 活动id
   */
  public getActivityById(id: string) {
    return request({
      url: "/activity/" + id,
      method: "GET"
    });
  }
}
