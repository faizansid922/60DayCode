//Problem 5: Write a function to replace spaces in a given string with - .
function replaceSpace(str){
    return str.replace(/\s/g, "-");
}

var inputStr = "Hello World";
var repStr = replaceSpace(inputStr);
console.log(repStr);