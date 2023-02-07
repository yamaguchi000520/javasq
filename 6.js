const price = 3000;
if (price >= 5000){
  console.log('送料無料');
} else {
  console.log('送料800円');
}

const age = 18;
if (age < 20){
  console.log('飲酒禁止');
}
//elseなしでも大丈夫

const name = 'Aさん';
if (name){
  console.log('名前が存在します。');
} else {
  console.log('名前が存在しません。');
}

//else ifによる分岐の増加
const weight = 300;
if (weight < 250){
  console.log('配送料200円');
} else if (weight < 500){
  console.log('配送料400円');
} else if (weight < 1000){
  console.log('配送料1000円');
} else {
  console.log('お取り扱いできません。');
}
//条件式を記述する場合は上から順番に読み込むため、交互しないように気をつける


//複雑な条件式
const age2 = 18;
if (20 <= age <= 29){
  console.log('20代');
}

//論理積(&&),  論理和(||)
//論理積　AかつB
//論理話　AまたはB
const a = 5;
console.log(a > 1 && a < 9);
console.log(a < 4 || a > 6);
const age3 = 65;
if (age3 >= 20 && age3 <= 29){
  console.log('20代');
} else {
  console.log('20代以外');
}

if (age3 <= 10 || age3 >= 60){
  console.log('Jr.またはシニア');
}

//三項演算子
const size = 20;
let result;
//今までの方法
if (size >= 30){
  result = '粗大ゴミ';
} else {
  result = '不燃ごみ';
}
//三項演算子
const result2 = (size >= 30) ? '粗大ゴミ' : '不燃ごみ';
//２つ以上の条件があるときは通常のif文を用いると読みやすい


//switch文
const ranking = 2;
switch (ranking) {
  case 1:
    console.log('金メダル');
    break;
  case 2:
    console.log('銀メダル');
    break;
  case 3:
    console.log('銅メダル');
    break;
  default:
    console.log('メダルなし');
}
//breakを記述しなくてもプログラムは実行されるが、処理が終わらず、つぎのcaseまで処理が続いてしまう。