//1.DOMについて
const tag = window.document.querySelector('#sample');
tag.textContent = 'テキストを書き換えます'；

//2.特定要素を探す
// document.querySelector(CSSセレクタ);
const element = document.querySelector('.sample');
console.log(element);
//→1個目のsampleが表示される

//全ての特定要素を探す
const elements = document.querySelector All('.sample');
console.log(elements.length);
//特定要素の数
console.log(elements[0]);
//[0]を指定することで、１個目のsampleが表示できる

//現在はquerySelectorよりもgetElementByClassName('')の方がパフォーマンスとして優れている

//3. 要素.textContent = '変更したいテキスト';
const p = document.querySelector('p');
p.textContent = '変更します。';

//要素の変更
const img = document.querySelector('img')
img.width = 300;

//カスタムデータ属性
// data-任意の名前＝"値"
const profile = document.querySelector('.profile');
console.log(profile.dataset.id);  //100
console.log(profile.dataset.userName); //zaru

//カスタムデータを書き換える
profile.dataset.id = 999;
profile.dataset.userName = 'new zaru'
console.log(profile);
カスタムデータの名前表記
// HTML:data-id       js:dataset.id
// HtML:data-user-id  js:dataset.userId
// HTML:data-userId   js: dataset.userid

//カスタムデータの活用
const scoreElement = document.querySelector('.score');
const score = scoreElement.dataset.score;
if (score >= 80){
  scoreElement.style.color = 'blue';
}


//4. CSSを変更する
//要素..style.CSSプロパティ名 = '値';
const changeElement = document.querySelector('.change')
changeElement.style.fontSize = '36px';

//class属性を変更する
const p = document.querySelector('p');
//ひとつずつCSSを変更すると煩雑なコードになる
p.style.fontSize = '36px';
p.style.color = 'red';
p.style.backgroundColor = 'yellow';

// クラスを削除する
// 要素.classList.remove('削除するクラス名');
const element = document.querySelector('p');
element.classList.remove('nomal');

// クラスを追加する
// 要素.classList.add('追加するクラス名');
element.classList.add('warning');

// ClassListオブジェクト名
// toggle('クラス名'). 指定クラスがあれば削除し、なければ追加する
// replace('対象クラス名', '置換クラス名'). 指定クラスを置換する
// contains('クラス名'). 指定クラスが要素に指定されているか確認する

// クラスを置換する
const element = document.querySelector('p');
element.classList.replace('nomal', 'warning');

//要素を作成する
// document.createElement('タグの名前');
const element = document.createElement('p');
console.log(element);

//要素を末尾に変更する
// 親要素.append(追加する要素);
const newElement = document.createElement('p');
newElement.textContent = '新しく追加する要素';
const content = document.querySelector('.content');
content.append(newElement);
//小要素に要素を追加する
// 親要素.prepend(追加する要素);
content.prepend(newElement);

//指定要素の前や後ろに追加する
// 指定要素.before(追加する要素);
// 指定要素.after(追加する要素);
const newElement = docuent.createElement('p');
newElement.textcontent = '新しく追加した要素です。';
const firstElement = document.querySelector('.first');
firstElement.before(newElement);

//指定要素を削除
firstElement.remove();

//要素を置換する
//置き換えたい要素.replaceEith(置き換える要素);



