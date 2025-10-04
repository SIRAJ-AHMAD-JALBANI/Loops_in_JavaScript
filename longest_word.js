function findLongestWordLength(sentence){
  const words = sentence.trim().split(/\s+/).sort((a,b)=>b.length - a.length)
  console.log(words)
  return words[0].length
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"))