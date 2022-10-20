/**
 *
 * @param {*} 需要被拷贝的目标对象
 * @param {*} 弱引用哈希表
 * @returns {*} 深拷贝出来的对象
 * 1. 判断类型
 * 2. 如果是对象，则遍历递归
 * 3. 不是则直接返回
 */
// function cloneDeep(obj, map = new WeakMap()) {
//   function isObject(obj) {
//     if (!obj) {
//       return false;
//     } else {
//       return typeof obj === 'object';
//     }
//   }
//   if (isObject(obj)) {
//     let res = Array.isArray(obj) ? [] : {};
//     if (map.has(obj)) {
//       return map.get(obj);
//     }
//     map.set(obj, res);
//     for (let key in obj) {
//       res[key] = cloneDeep(obj[key], map);
//     }
//     return res;
//   } else {
//     return obj;
//   }
// }


// // 复习深拷贝
// function cloneDeep(obj,map = new WeakMap()){
//   function checkObj(obj){
//     if(obj === null){
//       return false
//     }
//     return typeof obj === 'object'
//   }

//   if(typeof obj !== "object") return
//   let res = Array.isArray(obj) ? [] : {}
//   if(map.has(obj)){
//     return map.get(obj,res)
//   }
//   map.set(obj,res)
//   for(let key in obj){
//     if(Object.prototype.hasOwnProperty.call(obj,key)){
//       if(checkObj(obj[key])){
//         res[key] = cloneDeep(obj[key],map)
//       } else {
//         res[key] = obj[key]
//       }
//     }
//   }
//   return res
// }


function isObject(obj){
  if(obj == null){
    return false 
  }
  return typeof obj === 'object'
}

function cloneDeep(obj, map = new WeakMap()){
  let res = Array.isArray(obj) ? [] : {}
  if(map.has(obj)){
    return map.get(obj)
  }
  map.set(obj,res)

  for(let key in obj){
    if(isObject(obj[key])){
      res[key] = cloneDeep(obj[key], map)
    } else {
      res[key] = obj[key]
    }
  }

  return res
}

let a = {
  fun : function(){},
  test : null,
  a : 1,
  b : 2,
  c : [1,2,3,4],
  d : {
      d : 1,
      e : 2
  }
}
a.origin = a
let aa = cloneDeep(a)

it('深拷贝测试', () => {
  const target = {
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child',
    },
    field4: [2, 4, 8],
  };
  target.target = target;

  const res = cloneDeep(target);
  expect(target).toMatchObject(res);
  res.field4.push(10);
  expect(target.field4).toEqual([2, 4, 8]);
  expect(res.field4).toEqual([2, 4, 8, 10]);
  expect(res.target).toMatchObject({
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child',
    },
    field4: [2, 4, 8, 10],
  });
  expect(target.target).toMatchObject({
    field1: 1,
    field2: undefined,
    field3: {
      child: 'child',
    },
    field4: [2, 4, 8],
  });
});
