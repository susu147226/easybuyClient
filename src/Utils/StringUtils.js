export const textEllipsis = (str, maxLength = 10) => {
    if (str?.length > maxLength) {
        return str.substr(0, maxLength) + "...";
    } else {
        return str;
    }
}



/**
 * 对手机号进行掩码替换
 * @param tel
 * @return {string|*}
 */
 export const maskTel = tel=>{
    if (tel) {
        return tel.replace(/(?<=\d{3})\d{4}(?=\d{4})/, "****")
    } else {
        return ""
    }
}


/**
 * 对邮箱进行掩码替换
 * @param email
 * @return {string|*}
 */
export const maskEmail = email=>{
    if(email){
        return  email.replace(/(?<=.{2}).+(?=.@)/,"****");
    }
    else {
        return "";
    }
}