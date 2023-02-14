//ブラウザオブジェクト
window.alert('アラートです');
//windowは省略できる
//alert('アラートです');

//確認ダイナログの確認
confirm('本当に削除しますか');

//指定した秒数後に実行する
// setTimeout(関数, ミリ秒数)
function delayTask () {
    console.log('1秒ごに実行する');
}
setTimeout(delayTask(), 1000);

//タイマーをキャンセルする
const timerId = setTimeout(delayTask(), 5000)
clearTimeout(timerId);


//指定した秒数ごとに繰り返し実行する
// setInterval(関数, ミリ秒数)
function repeteTask(){
    console.log('1秒ごとに繰り返す');
}
setInterval(repeteTask(), 1000);
//繰り返しを停止
const timerId2 = setInterval(repeteTask(), 1000);
clearInterval(timerId2);


//ウインドウを開く
// open();
//open(URL, ウインドウ名の指定, オプション);
open(URL, 'https://example.com', 'window name', 'width=400,　height=250');
// width ウィンドウの幅
// height　高さ
// left　ウインドウを表示する位置、画面左端からの距離で指定
// top　画面の上端から指定

//ウインドウを閉じる
const newWindow = open('https://example.com');
newWindow.close();

//Location/Historyオブジェクト
//URLを操作するLocationオブジェクト
console.log(location.href);
location.reload();
location.href = 'https://www.google.co.jp/';

// URLの情報を取得するプロパティ
// href　現在のURLを繰り返す、値を変更すると新しいページに遷移する
// protocol　URLのプロトコルを返します。（例：https:, http:
// hostname　URLのホスト名を返す
// pathname　　URLの/以降のパスを返す
// search  ？以降のパラメータを返す
// hash　URLの＃以降のフラグメント識別子を返します。

//閲覧履歴を操作する
//Historyはブラウザでいう「進む」「戻る」と同じ操作をすることが可能である
history.back();
history.forward();
//go()を使用することで指定のページを選択できる
