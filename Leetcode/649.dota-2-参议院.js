/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
 var predictPartyVictory = function(senateStr) {
    // R = true表示本轮循环结束后，字符串里依然有R;D同理。
    let R = true, D = true;
    // 当flag大于0时，R在D前出现，R可以消灭D。当flag小于0时，D在R前出现，D可以消灭R
    let flag = 0;
    let senate = senateStr.split('');
    while(R && D){ // 一旦R或者D为false，就结束循环，说明本轮结束后只剩下R或者D了
        R = false;
        D = false;
        for(let i = 0; i < senate.length; i++){
            if(senate[i] === 'R'){
                if(flag < 0) senate[i] = 0;// 消灭R，R此时为false
                else R = true;// 如果没被消灭，本轮循环结束有R
                flag++;
            }
            if(senate[i] === 'D'){
                if(flag > 0) senate[i] = 0;
                else D = true;
                flag--;
            }
        }
    }
    // 循环结束之后，R和D只能有一个为true
    return R ? "Radiant" : "Dire";
};
console.log(predictPartyVictory("RDD"))
// @lc code=end

