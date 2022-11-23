/**
 * 专门处理日期或时间的一个工具类
 */

import dayjs from "dayjs";


/**
 * 格式化日期
 * @param {string|Date|Number} _d 
 * @param {string} 格式化参数
 */
export const formatDateTime = (_d, split = "YYYY-MM-DD HH:mm:ss") => {
    let d = dayjs(_d);
    if (d.isValid()) {
        return d.format(split);
    }
    else {
        return "";
    }
}