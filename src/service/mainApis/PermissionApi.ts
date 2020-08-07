import request from '../MainService';
import { IPageParams } from './common';

/**
 * 权限数据类
 * @param name 权限名
 * @param display_name 显示名称
 * @param route 路由
 * @param icon 图标
 * @param parent_id 父级id
 * @param sort 排序
 */
export interface IPermission {
  /**
   * 权限名
   */
  name: string;

  /**
   * 显示名称
   */
  display_name: string;

  /**
   * 路由
   */
  route: string;

  /**
   * 图标
   */
  icon: string;

  /**
   * 父级id
   */
  parent_id: number;

  /**
   * 排序
   */
  sort: number;
}

/**
 * 权限Api类
 */
export default class PermissionApi {
  /**
   * 分页获取权限数据
   * @param params 分页参数
   */
  public getPermissionByPage(params: IPageParams) {
    return request({
      url: "/permission",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增权限数据
   * @param data 权限数据
   */
  public postPermission(data: IPermission) {
    return request({
      url: "/permission",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除权限数据
   * @param id 权限id
   */
  public deletePermissionById(id: string) {
    return request({
      url: "/permission/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑权限数据
   * @param id 权限id
   * @param data 权限数据
   */
  public putPermissionById(id: string, data: IPermission) {
    return request({
      url: "/permission/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取权限详情数据
   * @param id 权限id
   */
  public getPermissionById(id: string) {
    return request({
      url: "/permission/" + id,
      method: "GET"
    });
  }
}
