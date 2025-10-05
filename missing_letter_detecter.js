function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let current = str.charCodeAt(i);
    let next = str.charCodeAt(i + 1);
    if (next - current !== 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return undefined;
}

