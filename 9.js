// オブジェクト
// オブジェクトはカテゴリー
// プロパティはデータ１つ

//オブジェクトの書き方
// const オブジェクト名 = {
//   キー1: 値1,
//   キー2: 値2,
//   キー3: 値3
// }
const book = {
  title: '吾輩は猫である',
  author: '夏目漱石',
  pages: 620
}

console.log(book);

//空のオブジェクトの作成も可能
const emptyObject = {}

//データ型を調べる
//オブジェクトのデータ型はobjectになる
const obj = {a: 1}
console.log(typeof obj);

//プロパティへのアクセス方法
const books = {title: '吾輩は猫である'}
console.log(books.title); //ドット表記法
console.log(books['title']); //ブランケット表記法
//存在しないオブジェクトはundefinedとなる

//プロパティの追加と上書き
const book_new = { title: '吾輩は猫である' }
book_new.author = '夏目漱石'; //新しいプロパティを追加
book_new['pages'] = 620; //新しいプロパティをブランケット表記法で追加
console.log(book_new)

//プロパティの上書き
const person = { name: 'bob', age: 25}
person.name = 'Alice';
person['age'] = 25;
console.log(person);

//123bobやname-womanなどはエラーとなるが、''で囲うことでエラーを回避できる
//ドット法であればエラーとなるが、ブランケット法ならエラー回避できる
const object = {'first-name': 'Alice'}
object['first-name']; //okay
object.first-name; //error

//変数を使ってアクセスする
const shop = {category: book }
const c = 'book';
console.log(shop[c]); //okay
console.log(shop.c); //error


//メソッドの書き方
const human = {
  name: 'Alice',
  age: 20,
  interests: ['読書', '散歩'],
  greet: function(){ console.log('こんにちは'); } //この行がメソッドの記述
}

//メソッドの定義
// const オブジェクト名 = {
//   プロパティ名: 値,
//   メソッド名: 関数式
// }

// メソッドの呼び出し
// オブジェクト名.メソッド名(実引数)
const son = {
  name: 'Alice',
  greet: function(){
    console.log('こんばんわ')
  }
}
son.greet()

//メソッドのthisについて
const chara = {
  name: 'Alice',
  greet: function(){
    console.log(`こんにちは私は${name}です`);//うまく作動しない
    console.log(`こんにちは私は${this.name}です`); //okay
  }
}
chara.greet()

