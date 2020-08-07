import request from '../MainService';
import { IPageParams } from './common';

/**
 * 新增品牌数据类
 * @param name 品牌名称
 * @param photo 品牌图片
 * @param brand_category 品牌分类（调用参数详情接口查看品牌分类 item：brand_category）
 * @param supplier 品牌供应商
 * @param brand_user 品牌联系人
 * @param brand_user_phone 品牌联系人电话
 */
export interface IPostBrands {
  /**
   * 品牌名称
   */
  name: string;

  /**
   * 品牌图片
   */
  photo?: string;

  /**
   * 品牌分类（调用参数详情接口查看品牌分类 item：brand_category）
   */
  brand_category?: number;

  /**
   * 品牌供应商
   */
  supplier?: string;

  /**
   * 品牌联系人
   */
  brand_user?: string;

  /**
   * 品牌联系人电话
   */
  brand_user_phone?: string;
}

/**
 * 新增品牌数据类
 * @param name 品牌名称
 * @param photo 品牌图片
 * @param brand_category 品牌分类（调用参数详情接口查看品牌分类 item：brand_category）
 * @param supplier 品牌供应商
 * @param brand_user 品牌联系人
 * @param brand_user_phone 品牌联系人电话
 */
export interface IPutBrands {
  /**
   * 品牌名称
   */
  name: string;

  /**
   * 品牌图片
   */
  photo?: string;

  /**
   * 品牌分类（调用参数详情接口查看品牌分类 item：brand_category）
   */
  brand_category?: number;

  /**
   * 品牌供应商
   */
  supplier?: string;

  /**
   * 品牌联系人
   */
  brand_user?: string;

  /**
   * 品牌联系人电话
   */
  brand_user_phone?: string;
}

/**
 * 品牌Api类
 */
export default class BrandsApi {
  /**
   * 分页获取品牌列表
   * @param params 分页参数
   */
  public getBrandsByPage(params: IPageParams) {
    return request({
      url: "/brands",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增品牌数据
   * @param data 品牌数据
   */
  public postBrands(data: IPostBrands) {
    return request({
      url: "/brands",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除品牌
   * @param id 品牌id
   */
  public deleteBrandsById(id: string) {
    return request({
      url: "/brands/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑品牌
   * @param id 品牌id
   * @param data 品牌数据
   */
  public putBrandsById(id: string, data: IPutBrands) {
    return request({
      url: "/brands/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取品牌详情
   * @param id 品牌id
   */
  public getBrandsById(id: string) {
    return request({
      url: "/brands/" + id,
      method: "GET"
    });
  }
}
