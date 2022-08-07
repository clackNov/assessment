'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = function() {
  // 上記を assessmentButton.onclick = () => { に変更しても同様に動く アロー関数
  // console.log('ボタンが押されました');
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
    // 関数の処理の中で、 return; は、戻り値なしにそこで処理を終了するという意味 ガード句
  }
  console.log(userName);
  // 診断結果表示エリアの作成
  resultDivided.innerText = "";
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivided.appendChild(header);
  // div 要素を親として、h3 の見出しを子要素として追加するので appendChild という関数を使っています。

  const paragraph = document.createElement('p');
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // いままで使ってきた document.write では、<p>タグの中身</p> という HTML を適用するのに、タグの内容を document.write('<p>タグの中身</p>'); と記述する必要がありました。シンプルではありますが、後からタグの中身だけを変更したい場合などに手間取ってしまいます。しかし、document.createElement を使うと、まず <p></p> や <h3></h3> のような要素を作成し、後から innerText プロパティを用いてタグの中身を設定できます。

  // TODO ツイートエリアの作成
  // assessment.htmlのtweetの内容を元に作成
  tweetDivided.innerText = "";
  const anchor = document.createElement('a');
  const hrefValue =
  // const hrefValue =
  //   'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
  // 上記の文のURIの日本語部分を半角英数に変換
  'https://twitter.com/intent/tweet?button_hashtag=' +
  encodeURIComponent('あなたのいいところ') +
  '&ref_src=twsrc%5Etfw';

  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  // anchor.setAttribute('data-text', '診断結果の文章');
  anchor.setAttribute('data-text', result);
  anchor.innerText = 'Tweet #あなたのいいところ';

  tweetDivided.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
};

// Enterでも診断出来るようにする機能
userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};

//下記の書き方でもEnterで動作する 
// userNameInput.onkeydown = function(event) {
//   if (event.key === 'Enter') {
//     assessmentButton.onclick();
//   }
// };

const answers = [
  '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
  '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
  '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
  '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];

// 1 度しか代入できない変数（定数）を作る const（コンスト） という宣言
// {} で囲まれた中でのみ使える変数を作る let（レット） という宣言
// {} の外でも使える変数を作る var（バー）という宣言（var の使用は推奨しません）

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
// //  JSDoc と呼ばれる形式のコメントの書き方
//  function assessment(userName) {
//   // TODO 診断処理を実装する
//   return '';
// }
// TypeScript という言語のように、ソースコードの中に型の情報を書ける言語もあります。

// function assessment(userName) {
//   // 全文字のコード番号を取得してそれを足し合わせる
//   let sumOfCharCode = 0;
//   for (let i = 0; i < userName.length; i++) {
//     sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
//   }

//   // 文字のコード番号の合計を回答の数で割って添字の数値を求める
//   const index = sumOfCharCode % answers.length;
//   const result = answers[index];

//   // TODO {userName} をユーザーの名前に置き換える
//   return result;
// }

// console.log(assessment('太郎'));
// console.log(assessment('次郎'));
// console.log(assessment('太郎'));

// '何かしらの文字列や文章'.replaceAll('変えたい文字列', '変える文字列');
// console.log(
//   '{userName}のいいところは優しいところです。'.replaceAll('{userName}', '太郎')
// );

function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  // 文字のコード番号の合計を回答の数で割って添字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index];

  result = result.replaceAll('{userName}', userName);
  return result;
}

// console.assert は、第一引数には正しい時に true となるテストしたい式を記入し、
// 第二引数にはテストの結果が正しくなかった時に出したいメッセージを書きます。

console.assert(
  assessment('太郎') ===
    '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
  '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);

console.assert(
  assessment('太郎') === assessment('太郎'),
  '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);

// テストコード わざと間違えているもの
// console.assert(
//   assessment('太郎') ===
//     '太郎のいいところは決断力です。次郎がする決断にいつも助けられる人がいます。',
//   '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );