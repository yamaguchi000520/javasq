//関数
// fanction 関数名(仮引数){
//   処理;
// }

//関数の呼び出し
//関数名();

function hello(){
  console.log('こんにちは');
}

function hello(name){
  console.log(`こんにちは${name}さん`);
}

//戻り値あり
// fanction 関数名(仮引数){
//   処理;
//.  return 戻り値;
// }

function pi(){
  return 3.14;
}
const a = pi();
console.log(a);

//引数と戻り値が存在
function double(number){
  const result = number * 2;
  return result;
}
const b = double(10);
console.log(a);

//引数の応用
// fanction 関数名(引数1,引数2....){
//   処理;
// }

function sum(a,b){
  const result = a + b;
  return result;
}
const x = sum(3, 5);
console.log(x);

//undefinedになってしまう
function hello1(name = 'ゲスト'){ //デフォルト値を入れてあげる
  console.log(`こんにちは${name}さん`);
}

//関数式
// fanction 関数名(引数1,引数2....){
//   処理;
//   return 戻り値;
// }
//無名関数
const sayHello = function(){
  console.log('こんにちは');
}
sayHello();


//アロー関数

//通常
// const doSomething = function(x, y){
//   処理;
// }

//アロー関数
// const doSomething = (x, y) => {
//   処理;
// }

//一般的な記述
const doSomething = (a) => {
  return a * 2;
}
//省略した記述
const doSomething2 = (a) => a * 2;


//スコープ
function sample(){
  const y = 10;
  console.log(x);
}
sample(); //Yを参照できる
console.log(x); // sample関数外部からYは参照できないためエラーとなる

//ブロックスコープ
if (true){
  const v = 10;
  console.log(v); //内部からは参照できる
}
console.log(v); // 外部からは参照できない

//グローバルスコープ
//グローバル変数
const z = 1;
function doSomething3(){
  console.log(z); //呼び出せる
}
if (true) {
  console.log(z); //呼び出せる
}

//グローバル変数でbが宣言されていても、スコープ内ならbは宣言できる
//同じスコープないの時、同じ名前で宣言できない



