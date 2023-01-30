import request from '../utils/request';

export function getHotTabs() {
  return request({
    url: '/hot/tabs'
  });
}

/**
 * 热搜文章列表
 */
export function getHotListFromTabType(type) {
  return request({
    url: '/hot/list',
    data: {
      type
    }
  });
}
