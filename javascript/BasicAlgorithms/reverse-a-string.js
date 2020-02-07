function reverseString(str) {
  let arr = str.split('');
  let newstr = '';
  for (let i=arr.length-1; i>=0; i--) {
    newstr += arr[i];
  }

  return newstr;
}

console.log(reverseString("Greetings from Earth"));
