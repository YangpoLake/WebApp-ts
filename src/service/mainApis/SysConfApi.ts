import request from '../MainService'

/**
 * 系统配置数据类
 * @param switch_device_maintain 设备维保提醒开关
 * @param switch_device_alarm 设备报警提醒开关
 * @param role_device_maintain 设备维保角色
 * @param ali_ak 短信ACCESS_KEY
 * @param ali_as 短信ACCESS_KEY_SECRET
 * @param ali_signname 短信签名
 * @param ali_template 短信模板
 * @param app_help_number app求助电话
 */
export interface ISysConf {
  /**
   * 设备维保提醒开关
   */
  switch_device_maintain: number;

  /**
   * 设备报警提醒开关
   */
  switch_device_alarm: string;

  /**
   * 设备维保角色
   */
  role_device_maintain: Array<any>;

  /**
   * 短信ACCESS_KEY
   */
  ali_ak: string;

  /**
   * 短信ACCESS_KEY_SECRET
   */
  ali_as: number;

  /**
   * 短信签名
   */
  ali_signname: number;

  /**
   * 短信模板
   */
  ali_template: number;

  /**
   * app求助电话
   */
  app_help_number: number;
}

/**
 * 系统配置Api类
 */
export default class SysConfApi {
  /**
   * 更新配置
   * @param data 配置数据
   */
  public putSysConf(data: any) {
    return request({
      url: "/sys_conf/update",
      method: "PUT"
    });
  }
  
  /**
   * 配置详情
   */
  public getSysConf() {
    return request({
      url: "/sys_conf",
      method: "GET"
    });
  }
}
