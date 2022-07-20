/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode.cn/problems/word-ladder/description/
 *
 * algorithms
 * Hard (47.73%)
 * Likes:    1069
 * Dislikes: 0
 * Total Accepted:    157.5K
 * Total Submissions: 329.5K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 ->
 * s2 -> ... -> sk：
 * 
 * 
 * 每一对相邻的单词只差一个字母。
 * 对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
 * sk == endWord
 * 
 * 
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列
 * 中的 单词数目 。如果不存在这样的转换序列，返回 0 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log","cog"]
 * 输出：5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList =
 * ["hot","dot","dog","lot","log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= beginWord.length <= 10
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 5000
 * wordList[i].length == beginWord.length
 * beginWord、endWord 和 wordList[i] 由小写英文字母组成
 * beginWord != endWord
 * wordList 中的所有字符串 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.length === 0 || !wordList.includes(endWord)) return 0
    let graph = {}
    function check(str1,str2){
        let res = 0
        for(let i=0;i<str1.length;i++){
            if(str1[i] !== str2[i]){
                res++
            }
        }
        return res === 1
    }
    for(let i=0;i<wordList.length;i++){
        let start = wordList[i]
        if(start === beginWord) continue
        graph[start] = graph[start] || []
        for(let j=0;j<wordList.length;j++){
            if(i === j) continue
            let end = wordList[j]
            if(check(start,end)){
                graph[start].push(end)
            }
        }
    }

    for(let i=0;i<wordList.length;i++){
        let end = wordList[i]
        if(beginWord === end) continue
        if(check(beginWord,end)){
            graph[beginWord] = graph[beginWord] || []
            graph[beginWord].push(end)
        }
    }
    console.log(graph)
    if(Object.keys(graph).length === 0) return 0
    let visited = {"-1" : 0}
    function breadthTraversal(node){
        let q = [[node,-1]]
        while(q.length){
            let [temp, from] = q.shift()
            visited[temp] = visited[temp] || 0
            visited[temp] += visited[from] + 1
            for(let next of graph[temp] || []){
                if(next === from || next === temp) continue
                if(next === endWord){
                    visited[endWord] = (visited[temp]||0)+1
                    return
                }
                q.push([next,temp])
            }
        }
    }
    breadthTraversal(beginWord)
    return visited[endWord]
};
beginWord = "hit", endWord = "cog", wordList = ["hot","cog","dot","dog","hit","lot","log"]
console.log(ladderLength(beginWord,endWord, wordList))
// @lc code=end

