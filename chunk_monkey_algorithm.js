function chunkArrayInGroups(arr, number) {
  let bigArr = [];
  for (let i = 0; i < arr.length; i += number) {
    let chunk = arr.slice(i, i + number);
    bigArr.push(chunk);
  }
  return bigArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
