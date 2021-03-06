function myNew(constru, ...params) {
  let objTarget = new Object();
  let res = constru.apply(objTarget, params);
  Object.setPrototypeOf(objTarget, constru.prototype);
  return typeof res === 'object' ? res || objTarget : objTarget;
}
function Otaku(name, age) {
  this.strength = 60;
  this.age = age;

  return {
    name: name,
    habit: 'Games',
  };
}

var person = new Otaku('Kevin', '18');

console.log(person.name); // Kevin
console.log(person.habit); // Games
console.log(person.strength); // undefined
console.log(person.age); // undefined
