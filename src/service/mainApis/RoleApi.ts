import request from '../MainService';
import { IPageParams } from './common';

/**
 * 角色数据类
 * @param name 角色名
 * @param display_name 显示名称
 */
export interface IRole {
  /**
   * 角色名
   */
  name: string;

  /**
   * 显示名称
   */
  display_name: string;
}

/**
 * 角色Api类
 */
export default class RoleApi {
  /**
   * 获取角色的所有权限
   * @param id 角色id
   */
  public getRolePermission(id: string) {
    return request({
      url: "/role/" + id + "/permission",
      method: "GET"
    });
  }
  
  /**
   * 编辑角色权限
   * @param roleId 角色id
   * @param permissionIds 权限id数组
   */
  public PutRolePermission(roleId: string, permissionIds: Array<string>) {
    return request({
      url: "/role/" + roleId + "/assignPermission",
      method: "PUT",
      data: {
        permissions: permissionIds
      }
    });
  }
  
  /**
   * 分页获取角色数据
   * @param params 分页参数
   */
  public getRoleByPage(params: IPageParams) {
    return request({
      url: "/role",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增角色
   * @param data 角色数据
   */
  public postRole(data: IRole) {
    return request({
      url: "/role",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除角色数据
   * @param id 角色id
   */
  public deleteRoleById(id: string) {
    return request({
      url: "/role/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑角色数据
   * @param id 角色id
   * @param data 角色数据
   */
  public putRoleById(id: string, data: IRole) {
    return request({
      url: "/role/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取角色详情数据
   * @param id 角色id
   */
  public getRoleById(id: string) {
    return request({
      url: "/role/" + id,
      method: "GET"
    });
  }
}
