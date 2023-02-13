/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    let isV6Type = /:/.test(queryIP)
    let isV4Type = /\./.test(queryIP)
    if(isV6Type){
        const ipv6Reg = /^[\da-fA-F]{1,4}$/
        const strs = queryIP.split(':')
        if(strs.length !== 8) return "Neither"
        for(let i=0;i<strs.length;i++){
            let number = strs[i]
            if(!ipv6Reg.test(number)) return "Neither"
        }
        return "IPv6"
    } else if(isV4Type) {
        const ipv4Reg = /^\d{1,3}$/
        const strs = queryIP.split('.')
        if(strs.length !== 4) return "Neither"
        for(let i=0;i<strs.length;i++){
            let number = strs[i]
            if(!ipv4Reg.test(number)||(number != '0'&&number.startsWith('0'))||number>255) return "Neither"
        }
        return "IPv4"
    }
    return "Neither"
};

console.log(validIPAddress("1..1.1.1"))
// @lc code=end

