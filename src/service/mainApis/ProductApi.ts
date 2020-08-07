import request from '../MainService'
import { IPageParams } from './common';

/**
 * 新增商品类
 * @param category 商品分类
 * @param title 商品名称
 * @param image_url 商品图片
 * @param price 商品售价
 * @param market_price 市场价格
 * @param quantity 数量
 * @param sum_price 总价
 * @param sort 排序，越大越往前，默认值: 10
 * @param details 详情
 */
export interface IPostProduct {
  /**
   * 商品分类
   */
  category: number;

  /**
   * 商品名称
   */
  title: string;

  /**
   * 商品图片
   */
  image_url: string;

  /**
   * 商品售价
   */
  price: number;

  /**
   * 市场价格
   */
  market_price: number;

  /**
   * 数量
   */
  quantity: number;

  /**
   * 总价
   */
  sum_price: number;

  /**
   * 是否上架
   */
  is_online?: boolean;

  /**
   * 排序，越大越往前，默认值: 10
   */
  sort?: number;

  /**
   * 详情
   */
  details: string;
}

/**
 * 编辑商品类
 * @param category 商品分类
 * @param title 商品名称
 * @param image_url 商品图片
 * @param price 商品售价
 * @param market_price 市场价格
 * @param quantity 数量
 * @param sum_price 总价
 * @param sort 排序，越大越往前，默认值: 10
 * @param details 详情
 */
export interface IPutProduct {
  /**
   * 商品分类
   */
  category?: number;

  /**
   * 商品名称
   */
  title?: string;

  /**
   * 商品图片
   */
  image_url?: string;

  /**
   * 商品售价
   */
  price?: number;

  /**
   * 市场价格
   */
  market_price?: number;

  /**
   * 数量
   */
  quantity?: number;

  /**
   * 总价
   */
  sum_price?: number;

  /**
   * 是否上架
   */
  is_online?: boolean;

  /**
   * 排序，越大越往前，默认值: 10
   */
  sort?: number;

  /**
   * 详情
   */
  details: string;
}

/**
 * 商品Api类
 */
export default class ProductApi {
  /**
   * 分页获取商品数据
   * @param params 分页数据
   */
  public getProductByPage(params: IPageParams) {
    return request({
      url: "/product",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增商品数据
   * @param data 商品数据
   */
  public postProduct(data: IPostProduct) {
    return request({
      url: "/product",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除商品数据
   * @param id 商品id
   */
  public deleteProductById(id: string) {
    return request({
      url: "/product/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑商品数据
   * @param id 商品id
   * @param data 商品数据
   */
  public putProductById(id: string, data: IPutProduct) {
    return request({
      url: "/product/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取商品详情数据
   * @param id 商品id
   */
  public getProductById(id: string) {
    return request({
      url: "/product/" + id,
      method: "GET"
    });
  }
}
