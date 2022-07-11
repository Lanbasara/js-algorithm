function TreeNode(val,left,right){
    this.val = val
    this.left = left || null
    this.right = right || null
}

function transformArrayToTree(array){
    if(!array.length) return null
    let root = new TreeNode(array[0])
    let q = [root]
    let index = 1
    while(q.length){
        if(index === array.length) break
        let parent = q.shift()
        if(!parent.left && array[index] !== null){
            parent.left = new TreeNode(array[index])
            q.push(parent.left)
        }
        index++
        if(!parent.right && array[index]!==null){
            parent.right = new TreeNode(array[index])
            q.push(parent.right)
        }
        index++
    }
    return root
}
let arr = [1,2,3,null,null,4,5]
let root = transformArrayToTree(arr)
console.log(root)

module.exports = {
    transformArrayToTree
}