var calc=["aaa(((","fbbb","l"];
let flag=false;
for (let i = 0; i < calc.length; i++) {
    if (flag || "/(flc'\".".split``.some(v => v == calc[i])) {
        flag = true;
        calc = calc.slice(0, i) + "*" + calc.slice(i + 1, calc.length);
        console.log(calc);
    }
}
