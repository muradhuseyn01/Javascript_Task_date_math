//Task1
/*
const a = 5; 
const b = 6; 
const c = 7;
let p,s;
p=(a+b+c)/2;
s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(s);
*/


//Task1.2
/*
let a = 2.100212;
num = a.toFixed(2);
num = parseFloat(num).toFixed(3);
console.log(num);
*/


//Task1.3
/*
let arr = [12, 34, 56, 1];
let arr2 = [-12, -34, 0, -56, -1];

console.log( Math.max(...arr));
console.log( Math.max(...arr2));
*/


//Task1.4
/*
let num = '12';
if (typeof num == 'number') {
    console.log('True');
}
else {
    console.log('False');
}
*/


//Task1.5
/*
function theorem(a, b, c) {

    if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        console.log("Duzbucaqli ucbucaq");
    }
    else {
        console.log("Duzbucaqli ucbucaq deyil");

    }
}
theorem(6, 8, 10);
*/


//Task1.6
/*
const logrf = num => Math.log10(num) % 1 === 0;
console.log(logrf(1));
console.log(logrf(10));
console.log(logrf(30));
*/


//Task1.7
/*
let str='abcd';
result=str.slice(1,3);
console.log(result);
*/

//Task1.8
/*
let arr=[1, 3, 4, 5];

for (i = 1; i < arr.length + 1; i++) {
    if (arr.indexOf(i) === -1) {
        console.log("i="+i);
    }
}
*/
