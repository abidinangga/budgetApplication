let num = [3, 2, 4];
let target = 5;
let result = [];
for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num.length; j++) {
    if (num[i] + num[j] == target) {
      result.push(i, j);
    }
  }
  break;
}
console.log(result);
