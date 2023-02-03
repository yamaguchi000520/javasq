// データ型
// Number(数値)
// String(文字列)
// Bootlean(論理型)
// Null
// Undefined

// 何型かを調べる typeof 値
console.log(typeof 10)
// 10のデータを調べてlogを出す

//Number型
console.log(typeof 100)//数値として認識
console.log(typeof '100')//文字列として認識

//String型
const name = 'Alice';
const cuuntry = "日本";

console.log(typeof 'abc');

//Boolean 論理型
//真偽を調べる
console.log(typeof true); //真偽値を確かめる時は''で囲ってしまうと文字列型として調べてしまう

console.log( 5 > 3);//数値の大小を比較

//Null型
console.log(typeof null); //Null型は値としては存在するが、[空っぽ]であることを示す

//Undefined型
console.log(typeof undefined); //存在しないことを示す

let z;
console.log(z);//値を設定していない場合「undefined」(空っぽ)と表示される

//primitive値

