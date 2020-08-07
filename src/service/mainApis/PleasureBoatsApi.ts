import request from '../MainService';

/**
 * 游船数据类
 * @param name 游船名称
 * @param device_model 游船型号信息（{"device_model":{"id":"1"}}）
 * @param numbering 游船编号
 * @param photo 游船图片
 * @param brand 游船品牌("brand":{"id":"2"})
 * @param status 游船状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
 */
export interface IPleasure {
  /**
   * 游船名称
   */
  name: string;

  /**
   * 游船型号信息（{"device_model":{"id":"1"}}）
   */
  device_model: any;

  /**
   * 游船编号
   */
  numbering: string;

  /**
   * 游船图片
   */
  photo?: string;

  /**
   * 游船品牌("brand":{"id":"2"})
   */
  brand?: any;

  /**
   * 游船状态 (调用参数详情接口 item:device_status)(-1:异常，0：未使用, 1：使用中)
   */
  status?: number;
}

/**
 * 游船Api类
 */
export default class PleasureBoatsApi {
  /**
   * 分页获取游船数据
   * @param params 分页数据
   */
  public getPleasureBoatsByPage(params: any) {
    return request({
      url: "/pleasure/boats",
      method: "GET",
      params
    });
  }
  
  /**
   * 新增游船数据
   * @param data 游船数据
   */
  public postPleasureBoats(data: IPleasure) {
    return request({
      url: "/pleasure/boats",
      method: "POST",
      data
    });
  }
  
  /**
   * 删除游船数据
   * @param id 游船id
   */
  public deletePleasureBoatsById(id: string) {
    return request({
      url: "/pleasure/boats/" + id,
      method: "DELETE"
    });
  }
  
  /**
   * 编辑游船数据
   * @param id 游船id
   * @param data 游船数据
   */
  public putPleasureBoatsById(id: string, data: IPleasure) {
    return request({
      url: "/pleasure/boats/" + id,
      method: "PUT",
      data
    });
  }
  
  /**
   * 获取游船详情数据
   * @param id 游船id
   */
  public getPleasureBoatsById(id: string) {
    return request({
      url: "/pleasure/boats/" + id,
      method: "GET"
    });
  }
}
