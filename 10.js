//Javascriptにもともと用意されているオブジェクト

//Math
//円周率のプロパティ名はPI
console.log(Math.PI);

//絶対値の計算
console.log(Math.abs(-10)); //絶対値はabsを使用する

//四捨五入、切り捨て切り上げ
console.log(Math.round(1.4)); //四捨五入
console.log(Math.floor(10.3));  //切り捨て
console.log(Math.ceil(10.3));  //切り上げ

//ランダムの数を生成
console.log(Math.random());

//サイコロを作ろう
console.log(Math.floor(Math.rondom()*6) + 1);
//rondomは0-1の数が生成される。これを*6することで0-5.94までの数値となる
//floorを使用することで小数点以下を切り捨てる。よって0-5までの数値となり。最後に+1すると1-6となる

//Data
//dateオブジェクトは日付の情報をオブジェクトとして扱えるようにしもの
new Date() //dateオブジェクトの生成
const now = new Date();
console.log(now);

//特定日時のDateオブジェクト
const theDay = new Date(2030, 3, 1, 5, 20, 0);
console.log(theDay); //左から、年、月、日、時、分、秒となっている

// getFullYear()
// getMonth()
// getDate()

console.log(theDay.getFullYear);
console.log(theDay.getMonth);
console.log(theDay.getDate);

//日付をわかりやすく表示
const today = new Date().toLocaleString('ja-JP', {
  dateStyle: 'long'
});
console.log(today);

const formatter = Intl.DateTimeFormat('ja-JP', {
  dateStyle: 'long'
});
const nowday = formatter.format(new Date());
console.log(today);
//2023年1月23日
