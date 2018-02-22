module.exports = function check(str, bracketsConfig) {
  var arr = str.split('');
  var stack = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < bracketsConfig.length; j++) {
if (arr[i] == bracketsConfig[j][0]) {
    if(arr[i] == bracketsConfig[j][1] && arr[i] == stack[stack.length - 1]) {
        stack.pop();
        continue;
    }
    stack.push(arr[i]);
} else if (arr[i] == bracketsConfig[j][1]) {
  if (stack[stack.length - 1] == bracketsConfig[j][0]) {
      stack.pop();
  } else {
      return false;
  }
}  
}
}
if (stack.length == 0) {
  return true;
} else {    
  return false;
}
}
