//配列

//書き方
const interests = ['読書', '料理', 'キャンプ'];
console.log(interests);
const element0 = interests[0]; // 0番目＝読書. を選択
console.log(element0);

//存在しないインデックスを指定した場合は. undefinedになる

//要素の上書き
const interests2 = ['読書', '料理', 'キャンプ']
interests2[0] = '散歩';

//要素の追加
interests2[3] = '食事';

//要素の数を調べる
const count = interests2.length;
console.log(count);

//要素を最後尾に追加する
interests2.push('水泳'); //push()で加えると最後に追加される

//要素の最後尾から取り除く
interests2.pop(); //()は省略できない

const alphabet = [ 'a', 'b', 'c'];
const last = alphabet.pop();
console.log(last);
console.log(alphabet);

//特定の要素が配列に含まれているか調べる
const fruits = [ 'りんご', 'バナナ', 'みかん' ]
const check1 =fruits.includes('りんご');
console.log(check1);

//配列要素の結合と文字列の分割
const interests3 = ['読書', '料理', 'キャンプ']
const a = interests3.join('と');
console.log(a);

const string = '読書&料理&キャンプ';
const b = string.split('&'); // splitは指定した単語を抜き出す働き
console.log(b);