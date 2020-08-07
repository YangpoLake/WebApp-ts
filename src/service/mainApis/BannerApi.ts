import request from '../MainService';
import { IPageParams } from './common';

/**
 * 新增Banner类
 * @param title 轮播图名称
 * @param images_url 轮播图图片
 * @param url 跳转地址，选填字段
 * @param is_show 是否显示，选填字段，默认值: false
 * @param sort 排序，越大越往前，选填字段，默认值: 10
 */
export interface IPostBanner {
  /**
   * 轮播图名称
   */
  title: string;

  /**
   * 轮播图图片
   */
  images_url: string;

  /**
   * 跳转地址，选填字段
   */
  url?: string;

  /**
   * 是否显示，选填字段，默认值: false
   */
  is_show?: boolean;

  /**
   * 排序，越大越往前，选填字段，默认值: 10
   */
  sort?: number;
}

/**
 * 编辑Banner类
 * @param title 轮播图名称，选填字段
 * @param images_url 轮播图图片，选填字段
 * @param url 跳转地址，选填字段
 * @param is_show 是否显示，选填字段
 * @param sort 排序，越大越往前，选填字段
 */
export interface IPutBanner {
  /**
   * 轮播图名称，选填字段
   */
  title?: string;

  /**
   * 轮播图图片，选填字段
   */
  images_url?: string;

  /**
   * 跳转地址，选填字段
   */
  url?: string;

  /**
   * 是否显示，选填字段
   */
  is_show?: boolean;

  /**
   * 排序，越大越往前，选填字段
   */
  sort?: number;
}

/**
 * Banner图Api类
 */
export default class BannerApi {
  /**
   * 获取Banner分页列表
   * @param params 分页参数
   */
  public getBannerByPage(params: IPageParams) {
    return request({
      url: "/banner",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增Banner数据
   * @param data Banner数据
   */
  public postBanner(data: IPostBanner) {
    return request({
      url: "/banner",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除Banner数据
   * @param id BannerId
   */
  public deleteBannerById(id: string) {
    return request({
      url: "/banner/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑Banner数据
   * @param id BannerId
   * @param data Banner数据
   */
  public putBannerById(id: string, data: IPutBanner) {
    return request({
      url: "/banner/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取Banner详情
   * @param id BannerId
   */
  public getBannerById(id: string) {
    return request({
      url: "/banner/" + id,
      method: "GET"
    });
  }
}
