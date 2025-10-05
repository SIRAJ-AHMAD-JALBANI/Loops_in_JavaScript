function repeatStringNumTimes(str, num){
  let output = ""
  if(num <= 0){
    return ""
  }
  for(let i = 0; i < num ; i ++){
      output += str
  }

return output
}

console.log(repeatStringNumTimes("**", 8))