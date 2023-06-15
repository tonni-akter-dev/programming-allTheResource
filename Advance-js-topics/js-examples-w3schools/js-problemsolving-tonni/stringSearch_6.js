/* function searchInString(string, search) {
  return string.indexOf(search) !== -1;
}
 console.log(searchInString('red','r')); // prints 'true';
 console.log(searchInString('red','b')); // prints 'false' */

var str = "He's my king from this day until his last day";
var count = 0;
var pos = str.indexOf("a");
while (pos !== -1) {
  count++;
  pos = str.indexOf("a", pos + 1);
  console.log(pos)
}
console.log(count)
