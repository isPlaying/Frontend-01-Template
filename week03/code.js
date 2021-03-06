function convertNumberToString(number, x = 10) {
  var integer = Math.floor(number);
  var string = '';
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }
  return string;
}

function convertStringToNumber(string) {
  chars = string.split('');
  var number = 0;
  for (var i = 0; i < chars.length; i++) {
    number = number * 10;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
  }
  return number;
}
