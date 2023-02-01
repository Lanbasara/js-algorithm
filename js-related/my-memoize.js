function defaultHasher() {
  return JSON.stringify(Array.from(arguments));
}

function memoize(func, hasher = defaultHasher) {
  const cache = new Map();
  return function () {
    let args = Array.from(arguments);
    let key = hasher(args);
    if (cache.has(key)) return cache.get(key);
    let res = func.apply(this, args);
    cache.set(key, res);
    return res;
  };
}
