//文字列型
//クォーテーションで囲む
//''も""も変わらないが、統一性があると読みやすい、基本的には''は意味のない文字列、""意味のある文字列

const x = こんにちは;//エラーになる

console.log('私の名前は"アリス"です'); // ""の中に""はエラーになる

//特殊な文字列
// \'xxx\' シングルクォーテーション
// \n 改行
// \\ バックスラッシュ

console.log('私の名前は\'アリス\'です。')

// const text = 'こんにちは、
// 私はアリスです'　//エラーになる

const text2 = 'こんにちは、\n私の名前はアリスです。';

const a = '私は' + 'アリスです。';
console.log(a);

 // 文字列と数値の結合
 console.log('1' + 2);
 // 12になる

//テンプレートリテラルでコードが見やすくなる
const name = 'Alice';
const text1 = '私の名前は' + name + 'です。';
console.log(text1);
const text2 = `私の名前は${name}です。`;
console.log(text2);



