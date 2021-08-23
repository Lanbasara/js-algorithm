/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0){
        return 0
    }
    let i=0,j=0;
    while(i<haystack.length && j<needle.length){
        if(haystack[i] === needle[j]){
            i++;
            j++;
        } else {
            i = i-j+1;
            j=0
        }
        if(j === needle.length){
            return i - j
        }
    }
    return -1
};

const haystack = "hello", needle = "ll"
const haystack2 = "aaaaa", needle2 = "bba"
const haystack3 = "", needle3 = ""
const haystack4 = "aaa", needle4 = "a"
console.log(strStr(haystack,needle))
console.log(strStr(haystack2,needle2))
console.log(strStr(haystack3,needle3))
console.log(strStr(haystack4,needle4))