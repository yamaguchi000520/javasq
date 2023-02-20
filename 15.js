// 同期通信

function syncAlert(){
  alert('アラートを表示する');
  console.log('ログを出力');
}
syncAlert();

// 非同期通信
function syncAlert2(){
  setTimeout(function(){
    alert('アラートを表示');
  }, 0);
  console.log('ログを出力');
}
syncAlert2();

// fetchの書き方
fetchの引数には通信したいURLを指定する
fetch(通信したい引数).then(function(response){
  return response.json();
}).then();

fetch('/sample').then(function(response){
  return response.json();
}).then(function(json){
  console.log(json);
}).catch(function(error){ //処理が失敗した場合
  console.log(error);
});


//async/awaitという記法を使用
async function showJsonText(){
  const response = await fetch('https://...');
  const json = await response.json();
  const resultBox.textContent = json.text;
}
showJsonText();

//awaitにthenと同じ効果がある
awaitは原則async宣言された関数の中でしか使用できない



