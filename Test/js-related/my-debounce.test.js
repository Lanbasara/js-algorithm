function debounce(fn, delay, immediate = false) {
  let timer = null;
  let res;
  let returnFn = function () {
    let context = this;
    let param = arguments;
    // key
    if (timer) clearTimeout(timer);
    if (immediate) {
      let canCall = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (canCall) res = fn.apply(context, param);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, param);
      }, delay);
    }
    return res;
  };
  returnFn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return returnFn;
}

test('debounce', () => {
  // 启用定时器模拟器
  jest.useFakeTimers();
  const mockFn = jest.fn();
  // 封装一个防抖函数
  const fn = debounce(mockFn, 1000);
  fn();
  fn();

  jest.runAllTimers();

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('debounce immediate', () => {
  // 启用定时器模拟器
  jest.useFakeTimers();
  let a = 1;
  const mockFn = jest.fn(() => a++);
  // 封装一个防抖函数
  const fn = debounce(mockFn, 10, true);
  fn();
  fn();

  setTimeout(() => {
    fn(3);
  }, 11);

  jest.runAllTimers();

  expect(mockFn.mock.calls.length).toBe(2);
  expect(a).toBe(3);
});
