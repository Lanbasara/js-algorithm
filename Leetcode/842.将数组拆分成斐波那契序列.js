/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} num
 * @return {number[]}
 */
 var splitIntoFibonacci = function (s) {
  const isValid = (track, num) => {
      // track 满足 回溯有效条件
      return track.length < 2 || num == (track[track.length - 1] + track[track.length - 2])
  }
  let res = []
  const backtrack = (start, track) => {
      if (res.length >= 1) return // 只求一个解,所以尽早结束
      if (start == s.length) {
          if (track.length > 2) {
              // 通常是 求所有的解,这题目只需要一个,所以直接替换
              res = [...track]
          }
          return
      }

      for (let i = start; i < s.length; i++) {
          let num = +(s.slice(start, i + 1))
          if (num >= 2 ** 31 || num < 0) break;    // 超出范围 就推出
          if (!isValid(track, num)) continue // 这里不能直接break,可能后续组成的数字,满足前面相加的条件
          track.push(num);
          backtrack(i + 1, track)
          track.pop();
          if (s[start] == '0') break
      }
  }

  backtrack(0, [])
  return res

};
console.log(splitIntoFibonacci("123456579"))
// @lc code=end

