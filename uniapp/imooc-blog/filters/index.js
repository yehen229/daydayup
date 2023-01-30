// 1. 导入dayjs
import dayjs from 'dayjs';
// 2. dayjs 默认语言是英文，我们这里配置为中文
import 'dayjs/locale/zh-cn';
// 3. 引入 relativeTime
import rTime from 'dayjs/plugin/relativeTime';

// 4. 加载中文语言包
dayjs.locale('zh-cn');
// 5. 加载相对时间插件
dayjs.extend(rTime);

/**
 * 6. 定义过滤器，通过 dayjs().to(dayjs(val)) 方法把【当前时间】处理为【相对时间】
 */
export function relativeTime(val) {
  return dayjs().to(dayjs(val));
}

/**
 * 将字符转化为以千为单位的字符
 * @param {*} val 待转换字符
 * @returns
 */
export function hotNumber(val) {
  const num = parseInt(val);
  if (num < 1000) return val;

  // 将 val 转为字符串
  val = val + '';
  // 获取以 千 为单位的值
  return val.substring(0, val.length - 3) + 'k';
}
