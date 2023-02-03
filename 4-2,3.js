//真偽型
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean('hello'));//true
console.log(Boolean(''));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false


//数値型

//数値を変数に入れて表示
const x = 123;
console.log(x);

//数値をそのまま表示
console.log(456);
//少数やマイナス値も表示できる

const a = 1;
const b = 2;
const c = '2';

console.log(a + b); //正しく計算される
console.log(a + c); //計算されるが、予想外の数値となる

//InfinityとNaN
//Infinity = 無限、NaN = 数でないもの(Not a Number)
console.log(3/0)//Infinity
console.log(0/0)//NaN

//数値比較
// <, >, <=, >=, ==, !=, ===, !==
//!= : 左右が異なる
//=== : 左右が厳密(データ型も含めて)等しくなる
//!== : 左右が厳密に異なる
console.log(1 == '1');//true
console.log(1 === '1');//false
console.log(1 != '1');//false
console.log(1 !== '1');//true

