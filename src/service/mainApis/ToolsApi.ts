import request from '../MainService';

/**
 * 工具Api类
 */
export default class ToolsApi {
  /**
   * 图片上传base64
   * @param data base64图片
   */
  public uploadByBase64(base64: string) {
    return request({
      url: "/sys_conf/update",
      method: "PUT"
    });
  }
  
  /**
   * 上传文件Api
   * @param form form表单数据
   */
  public upload(form: any) {
    return request({
      url: "/tools/upload",
      headers: {"content-type": "multipart/form-data"},
      method: "POST",
      data: form
    });
  }
}
