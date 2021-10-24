/**
 * 较为完备的深拷贝函数实现
 */
// step1 遍历属性，完成浅拷贝
function cloneDeep(obj) {
  const res = {};
  for (const key of obj) {
    res[key] = obj[key];
  }
  return res;
}
// step2 深度遍历所有属性,递归解决
function cloneDeep(obj) {
  if (typeof obj === 'object') {
    let res = {};
    for (let key in obj) {
      res[key] = cloneDeep(obj[key]);
    }
    return res;
  } else {
    return obj;
  }
}

// step3 兼容数组
function cloneDeep(obj) {
  if (typeof obj === 'object') {
    let res = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      res[key] = cloneDeep(obj[key]);
    }
    return res;
  } else {
    return obj;
  }
}

// step4: 使用map，解决循环引用的问题
function cloneDeep(obj, map = new Map()) {
  function isObject(target) {
    if (!target) {
      return false;
    }
    return typeof target === 'object';
  }
  if (isObject) {
    let res = Array.isArray(obj) ? [] : {};
    if (map.get(obj)) {
      return map.get(obj);
    }
    map.set(obj, res);
    for (let key in obj) {
      res[key] = cloneDeep(obj[key], map);
    }
    return res;
  } else {
    return obj;
  }
}
