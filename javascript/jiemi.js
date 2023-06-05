function decode(str) {
    var result = "";
    for (i = 1; i < str.length; i += 3) {
        result += "" + String.fromCharCode(parseInt((str.substr(i, 2)).toString(2), 14));
    }
    return result;
}
var str='%87%77%7c%45%72%7d%71%85%7b%73%7c%84%34%75%73%84%4d%7a%73%7b%73%7c%84%4a%89%53%72%2c%26%53%5d%4b%4b%38%26%2d%43';
console.log(decode(str));