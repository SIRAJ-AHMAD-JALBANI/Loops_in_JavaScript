function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();

  for (let char of word2) {
    if (!word1.includes(char)) {
      return false; 
    }
  }
  return true; 
}
