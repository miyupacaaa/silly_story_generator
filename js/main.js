// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
// 要素を取得
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// 配列からランダムに1つの項目を戻り値として返す関数
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas",
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House",
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
// クリックしたらresult関数を実行
randomize.addEventListener('click', result);

function result() {

  // 出力する文章
  let newStory = storyText;

  // 配列からランダムに選んだ文字列を格納
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // ランダムに選んだ文字列を文章中で置き換える
  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  // 名前が入力されている時はその値をBobと置き換える
  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }
  
  // ukにチェックしていたら重みと温度の値を変換する
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14)+ ' stone'; // ポンドをストーンに換算
    let temperature =  Math.round((94 - 32) * 5 / 9)+ ' centigrade'; // 華氏から摂氏へ換算
    // 変換した数値を元の数値と置き換える
    newStory = newStory.replace('300 pounds', weight).replace('94 fahrenheit', temperature);
  }
  
  console.log(newStory);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}