/**
 *
 * @param {*} 需要被拷贝的目标对象
 * @param {*} 弱引用哈希表
 * @returns {*} 深拷贝出来的对象
 * 1. 判断类型
 * 2. 如果是对象，则遍历递归
 * 3. 不是则直接返回
 */
function cloneDeep(obj, map = new WeakMap()) {
  function isObject(obj) {
    if (!obj) {
      return false;
    } else {
      return typeof obj === 'object';
    }
  }
  if (isObject(obj)) {
    let res = Array.isArray(obj) ? [] : {};
    if (map.has(obj)) {
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
