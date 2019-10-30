// function getRandomInt (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// export function shuffle (arr) {
//   let _arr = arr.slice()
//   for (let i = 0; i < _arr.length; i++) {
//     let j = getRandomInt(0, i)
//     let t = _arr[i]
//     _arr[i] = _arr[j]
//     _arr[j] = t
//   }
//   return _arr
// }

export function shuffle(array) {
  var m = array.length,
      t, i;
  // 如果还剩有元素…
  while (m) {
      // 随机选取一个元素…
      i = Math.floor(Math.random() * m--);
      // 与当前元素进行交换
      t = array[m];
      array[m] = array[i];
      array[i] = t;
  }
  return array;
}