/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if(num === 0) return "Zero"
    let f1 = Math.floor(num / 1000000000)
    let f2 = Math.floor((num - (f1 * 1000000000))/1000000)
    let f3 = Math.floor((num - (f1 * 1000000000) - (f2 * 1000000)) / 1000)
    let f4 = num - (f1 * 1000000000) - (f2 * 1000000) - (f3 * 1000)
    let res = ''
    if(f1) res += (" " + three(f1) + " Billion")
    if(f2) res += (" " + three(f2) + " Million")
    if(f3) res += (" " + three(f3) + " Thousand")
    if(f4) res += (" " + three(f4))

    return res.trim()

    function one(num){
        switch (num) {
            case 0: return "Zero"
            case 1: return "One"
            case 2: return "Two"
            case 3: return "Three"
            case 4: return "Four"
            case 5: return "Five"
            case 6: return "Six"
            case 7: return "Seven"
            case 8: return "Eight"
            case 9: return "Nine"
        }
    }

    function twoLessThenTwenty(num){
        switch (num) {
            case 10: return "Ten"
            case 11: return "Eleven"
            case 12: return "Twelve"
            case 13: return "Thirteen"
            case 14: return "Fourteen"
            case 15: return "Fifteen"
            case 16: return "Sixteen"
            case 17: return "Seventeen"
            case 18: return "Eighteen"
            case 19: return "Nineteen"
        }
    }
    function twoEndWithZero(num){
        switch (num) {
            case 1: return "Ten"
            case 2: return "Twenty"
            case 3: return "Thirty"
            case 4: return "Forty"
            case 5: return "Fifty"
            case 6: return "Sixty"
            case 7: return "Seventy"
            case 8: return "Eighty"
            case 9: return "Ninety"
        }
    }


    function two(num){
        let f1 = Math.floor(num / 10)
        let f2 = num - 10*f1
        if((f1 === 1) && f2){
            return twoLessThenTwenty(num)
        }
        if(f1 && !f2){
            return twoEndWithZero(f1)
        }
        if(f1 && f2){
            return twoEndWithZero(f1) + " " + one(f2)
        }
        if(!f1 && f2){
            return one(f2)
        }
    }


    function three(num){
        let f1 = Math.floor(num / 100)
        let f2 = num - 100 * f1
        if(f1 && f2){
            return one(f1) + " Hundred " + two(f2)
        }
        if(f1 && !f2){
            return one(f1) + " Hundred"
        }
        if(!f1 && f2){
            return two(f2)
        }
    }
};
const num = 10
console.log(numberToWords(num))
// @lc code=end

