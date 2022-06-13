var largestRectangleArea = function(heights) {
    const len = heights.length;
    const minLeftIndex = new Array(len);
    const maxRigthIndex = new Array(len);
    // 记录每个柱子 左边第一个小于该柱子的下标
    minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环
    for(let i = 1; i < len; i++) {
        let t = i - 1;
        // 这里不是用if，而是不断向左寻找的过程
        while(t >= 0 && heights[t] >= heights[i]) t = minLeftIndex[t];
        minLeftIndex[i] = t;
    }
    // 记录每个柱子 右边第一个小于该柱子的下标
    maxRigthIndex[len - 1] = len; // 注意这里初始化，防止下面while死循环
    for(let i = len - 2; i >= 0; i--){
        let t = i + 1;
        // 这里不是用if，而是不断向右寻找的过程
        while(t < len && heights[t] >= heights[i]) t = maxRigthIndex[t];
        maxRigthIndex[i] = t;
    }
    // 求和
    let maxArea = 0;
    for(let i = 0; i < len; i++){
        let sum = heights[i] * (maxRigthIndex[i] - minLeftIndex[i] - 1);
        maxArea = Math.max(maxArea , sum);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3]))