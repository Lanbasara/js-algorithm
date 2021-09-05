function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    let t = Math.floor((nums.length-1) / 2);
    let node = new TreeNode(nums[t]);
    if (t > 0) {
        node.left = sortedArrayToBST(nums.slice(0, t));
    }
    if (t + 1 < nums.length) {
        node.right = sortedArrayToBST(nums.slice(t + 1, nums.length));
    }
    return node;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))