function shuffler(array) {
  for (let i = 0; i < array.length; i++) {
    let index = Math.floor(Math.random() * (i + 1));
    [array[i], array[index]] = [array[index], array[i]];
  }
  return array;
}

console.log(shuffler([1, 2, 3, 4, 5, 6]));
