var container = document.getElementById('container');
var button = document.getElementById('button');
let counter = 0;

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

function getUserAction(e) {
  console.log('getUserAction this', this);
  console.log('getUserAction e', e);
  container.innerHTML = counter++;
  return counter;
}
let debouncedFn = debounce(getUserAction, 3000, true);
container.onmousemove = debouncedFn;
button.addEventListener('click', debouncedFn.cancel);
