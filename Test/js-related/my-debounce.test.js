/**
 * debounce: 防抖
 * 控制函数的调用频率。 让函数的实际掉用，按照固定的时间间隔掉用。 如果两次掉用发生在间隔时间之间，则忽略前一次掉用。直到等待指定时间
 * 可以传入参数
 * 可以设置立即调用
 * 支持取消
 */
// function debounce(fn, delay, immediate) {
//   let timer;
//   let res;
//   let resFn = function () {
//     let context = this;
//     let params = Array.from(arguments);
//     if (timer) clearTimeout(timer);
//     if (immediate) {
//       let canCall = !timer;
//       timer = setTimeout(() => {
//         timer = null;
//       }, delay);
//       if (canCall) res = fn.apply(context, params);
//     } else {
//       timer = setTimeout(() => {
//         res = fn.apply(context, params);
//       }, delay);
//     }
//     return res;
//   };

//   resFn.cancel = function () {
//     clearTimeout(timer);
//     timer = null;
//   };

//   return resFn;
// }


function debounce(fn,delay,immediate=false){
  let timer = null;
  let res;

  let resFn = function(){
    let context = this
    let params = Array.from(arguments)
    if(timer) clearTimeout(timer)
    if(immediate){
      let canCall = !timer
      timer = setTimeout(() => {
        timer = null
      },delay)
      if(canCall) res = fn.apply(context, params)
    } else {
      timer = setTimeout(() => {
        res = fn.apply(context, params)
      },delay)
    }
  }

  resFn.cancel = function(){
    clearTimeout(timer)
    timer = null
  }

  return resFn
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
