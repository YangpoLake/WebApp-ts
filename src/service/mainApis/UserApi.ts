import request from '../MainService';
import { IPageParams } from './common';

/**
 * 用户数据类
 * @param name 用户名
 * @param display_name 显示名
 * @param password 密码
 */
export interface IUser {
  /**
   * 用户名
   */
  name: string;

  /**
   * 显示名
   */
  display_name: string;

  /**
   * 密码
   */
  password: string;
}

/**
 * 用户Api类
 */
export default class UserApi {
  /**
   * 获取当前登录用户信息
   */
  public getAccount() {
    return request({
      url: "/account",
      method: "GET"
    });
  }
  
  /**
   * 给用户分配角色
   * @param userId 用户id
   * @param roleIds 角色id数组
   */
  public patchUserRole(userId: string, roleIds: string) {
    return request({
      url: "/user/" + userId + "/assignRole",
      method: "PATCH",
      data: {
        roles: roleIds
      }
    });
  }
  
  /**
   * 获取用户权限
   * @param userId 用户id
   */
  public getUserPermission(userId: string) {
    return request({
      url: "/user/" + userId + "/permission",
      method: "GET"
    });
  }
  
  /**
   * 获取用户角色
   * @param userId 用户id
   */
  public getUserRole(userId: string) {
    return request({
      url: "/user/" + userId + "/role",
      method: "GET"
    });
  }
  
  /**
   * 删除用户数据
   * @param userId 用户id
   */
  public deleteUserById(userId: string) {
    return request({
      url: "user/" + userId,
      method: "DELETE"
    });
  }
  
  /**
   * 修改个人信息
   * @param data 个人信息数据
   */
  public postAccount(data: IUser) {
    return request({
      url: "/account",
      method: "POST",
      data
    });
  }
  
  /**
   * 编辑用户数据
   * @param userId 用户id
   * @param data 用户数据
   */
  public patchUserById(userId: string, data: IUser) {
    return request({
      url: "/user/" + userId,
      method: "PATCH",
      data
    });
  }
  
  /**
   * 获取用户详情数据
   * @param userId 用户id
   */
  public getUserById(userId: string) {
    return request({
      url: "/user/" + userId,
      method: "GET"
    });
  }
  
  /**
   * 分页获取用户数据
   * @param params 分页参数
   */
  public getUserByPage(params: IPageParams) {
    return request({
      url: "/user",
      method: "GET",
      params
    })
  }
  
  /**
   * 新增用户
   * @param data 用户数据
   */
  public postUser(data: IUser) {
    return request({
      url: "/user",
      method: "POST",
      data
    });
  }
  
  /**
   * 给用户分配权限
   * @param userId 用户id
   * @param permissionIds 权限id数组
   */
  public patchUserPermission(userId: string, permissionIds: Array<string>) {
    return request({
      url: "/user/" + userId + "/assignPermission",
      method: "PATCH",
      data: {
        permissions: permissionIds
      }
    });
  }
}
