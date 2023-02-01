// function compose() {
//   let params = Array.from(arguments);
//   let index = params.length - 1;

//   return function () {
//     let args = Array.from(arguments);
//     let res = params[index].apply(this, args);
//     while (index--) {
//       res = params[index].call(this, res);
//     }
//     return res;
//   };
// }

const compose = (...fns) =>
  fns.reduceRight(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

function add(a, b) {
  return a + b;
}

function sign(a) {
  return -1 * a;
}

function multi(a) {
  return 100 * a;
}

function divide(a) {
  return 1000 / a;
}
// const calculater = compose(divide, multi, sign, add);
const calculater = compose(add, sign, multi, divide);

console.log(calculater(100, 10));
