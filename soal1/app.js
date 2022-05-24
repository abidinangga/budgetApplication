let twoSum = (num, target)=> {
  for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
          if (num[i] + num[j] === target) {
            return [i, j];
          }
      }
  }
}

console.log(twoSum([15, 7, 11, 2],13))
console.log(twoSum([3, 2, 4],7))
console.log(twoSum([3, 3],6))