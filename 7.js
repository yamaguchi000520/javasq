//for文
// for (初期化式; 条件式; 加算式){
//   処理;
// }

for (let i = 1; i <= 5; i++){
  console.log(`${i}回目の処理`);
}

//while文
// whiles（条件式） {
//   処理;
// }
let number = 2;
while (number < 100){
  console.log(`${number}番`);
  number = number * 2;
}

//配列に対する繰り返し処理
const fruits = ['みかん', 'りんご', 'ぶどう'];
for (let i = 0; i < 3; i++){
  console.log(fruits[i]);
}
//配列の分までの上限はlengthを使用する
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

//for...of文の書き方
// for(変数 of 配列){
//   処理;
// }
for (const fruit of fruits){
  console.log(fruit);
}

//breakでループから抜け出す
for (i = 0; i < 10; i++){
  if (i==3){
    break;
  }
}