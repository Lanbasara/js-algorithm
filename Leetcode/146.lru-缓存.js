/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
var LRUCache = function (capacity) {
    this.len = 0
    this.capacity = capacity
    this.list = {
        next: null
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    function resetList(){
        let prev = null
        let next = null
        let node = this.list
        while(node){
            if(node.next && node.next.key===key){
                prev = node
                next = node.next || null
                break
            } 
            node = node.next
        }
        prev.next = next
        node.next = this.list.next
        this.list.next = node
    }
    resetList.call(this)
    let node = this.list
    while (node) {
        if (node.key === key) return node.val
        node = node.next
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let isUpdate = false
    function updateValue() {
        // 更新数据
        let node = this.list
        while (node) {
            if (node.key === key) {
                node.val = value
                isUpdate = true
                break;
            }
            node = node.next
        }
    }
    function resetList(isUpdate=false){
        if(!isUpdate){
            if(this.len < this.capacity){
                this.len++
            }
            let newRoot = {}
            newRoot.key = key
            newRoot.val = value
            let next = this.list.next
            this.list.next = newRoot
            newRoot.next = next
            return
        }
        let prev = null
        let next = null
        let node = this.list
        while(node){
            if(node.next && node.next.key===key){
                prev = node
                next = node.next || null
                break;
            } 
            node = node.next
        }
        prev.next = next
        node.next = this.list.next
        this.list.next = node
    }

    function trail(){
        let count = 0
        let node = this.list.next
        while (node) {
            count++
            if (count >= this.len) {
                node.next = null
                break;
            } else {
                node = node.next
            }
        }
    }

    updateValue.call(this)
    resetList.call(this,isUpdate)
    trail.call(this)


    // if (this.len >= this.capacity) {
        // let newRoot = {}
        // newRoot.key = key
        // newRoot.val = value
        // let next = this.list.next
        // this.list.next = newRoot
        // newRoot.next = next
    //     let count = 0
    //     let node = this.list.next
    //     while (node) {
    //         count++
    //         if (count >= this.len) {
    //             node.next = null
    //             break;
    //         } else {
    //             node = node.next
    //         }
    //     }
    // } else if (this.len < this.capacity) {
    //     let newRoot = {}
    //     newRoot.key = key
    //     newRoot.val = value
    //     let next = this.list.next
    //     this.list.next = newRoot
    //     newRoot.next = next
    //     this.len++
    // }
};

// ["LRUCache", "put",  "put",  "put",  "put", "get", "get", "get",  "get", "put", "get", "get","get","get", "get"]
// [[3],        [1,1],  [2,2],  [3,3],  [4,4], [4],   [3],    [2],    [1],  [5,5],  [1],  [2],   [3],   [4], [5]]

let lru = new LRUCache(3)
lru.put(1, 1)
lru.put(2, 2)
lru.put(3, 3)
lru.put(4, 4)
console.log(lru.get(4))
console.log(lru.get(3))
console.log(lru.get(2))
console.log(lru.get(1))
lru.put(5, 5)
console.log(lru.get(1))
console.log(lru.get(2)) // 2
console.log(lru.get(3))
console.log(lru.get(4))
console.log(lru.get(5))


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

