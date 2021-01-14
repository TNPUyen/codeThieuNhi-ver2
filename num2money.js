const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

let numArr = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
let type = ["", "nghìn", "triệu", "tỷ"]

function special(num) {
    if (num == 1) {
        return 'mốt';
    } else if (num == 4) {
        return "tư";
    } else if (num == 5) {
        return "lăm";
    }
    else {
        return numArr[num];
    }
}

function group2(num1, num2) {
    let resultTemp = '';
    if (num1 == 0) {
        resultTemp += numArr[num2];
    } else if (num1 == 1) {
        if (num2 == 0) {
            resultTemp += "mười";
        } else {
            if (num2 == 5) {
                resultTemp += "mười lăm";
            } else {
                resultTemp += "mười " + numArr[num2];
            }
        }
    } else {
        if (num2 == 0) {
            resultTemp += numArr[num1] + " mươi ";
        } else {
            resultTemp += numArr[num1] + " mươi " + special(num2);
        }
    }
    return resultTemp;
}

function group3(num1, num2, num3) {
    let resultTemp = '';
    if (num2 == 0) {
        resultTemp = numArr[num1] + " trăm linh " + special(num3)
    } else {
        resultTemp = numArr[num1] + " trăm " + group2(num2, num3)
    }
    return resultTemp;
}

function groupNum(money) {
    let input = money.split(' ');
    let num = [];
    let result = '';
    let length = input.length - 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i].length == 1) {
            result = result + numArr[input[i]] + " ";
        } else if (input[i].length == 2) {
            num = input[i].split('');
            result = result + group2(num[0], num[1]) + " ";
        } else {
            if(input[i] == "000"){
                result = result + "";
            }else{
                num = input[i].split('');
                result = result + group3(num[0], num[1], num[2]) + " ";
            }
        }
        result = result + type[length] +" ";
        length--;
    }
    return result;
}

rl.on("line", (line) => console.log(groupNum(line))); //chỉ đúng khi xét tới trăm tỷ (12 số)

