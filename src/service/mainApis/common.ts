/**
 * 通用分页参数
 * @param page 当前页数
 * @param page_size 每页个数
 */
export interface IPageParams {
  /**
   * 当前页数
   */
  page: number;

  /**
   * 每页个数
   */
  page_size: number;
}