import request from '../MainService';

/**
 * 反馈&评论Api类
 */
export default class FeedbackApi {
  /**
   * 分页获取反馈&评价数据
   * @param params 分页数据
   */
  public getFeedbackByPage(params: any) {
    return request({
      url: "/feedback",
      method: "GET",
      params
    });
  }
  
  /**
   * 删除反馈&评价数据
   * @param id 反馈&评价id
   */
  public deleteFeedbackById(id: string) {
    return request({
      url: "/feedback/" + id,
      method: "DELETE"
    });
  }
}
