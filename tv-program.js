
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log(data);
console.log(data.list.g1[0].start_time);
console.log(data.list.g1[0].end_time);
console.log(data.list.g1[0].service.name);
console.log(data.list.g1[0].title);
console.log(data.list.g1[0].subtitle);
console.log(data.list.g1[0].content);
console.log(data.list.g1[0].act);
console.log(data.list.g1[1].start_time);
console.log(data.list.g1[1].end_time);
console.log(data.list.g1[1].service.name);
console.log(data.list.g1[1].title);
console.log(data.list.g1[1].subtitle);
console.log(data.list.g1[1].act);
}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let div = document.querySelector('div#result');
  let h = document.createElement('h2');
  h.textContent = '検索結果1件目';
  div.insertAdjacentElement('afterend',h);

  let ul = document.createElement('ul');
  let li = document.createElement('li');
  li.textContent = '開始時刻:' + data.list.g1[0].start_time;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '終了時刻:' + data.list.g1[0].end_time;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'チャンネル:' + data.list.g1[0].service.name;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'タイトル:' + data.list.g1[0].title;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'サブタイトル:' + data.list.g1[0].subtitle;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '番組説明:' + data.list.g1[0].content;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '出演者:' + data.list.g1[0].act;
  ul.insertAdjacentElement('beforeend',li);
  h.insertAdjacentElement('afterend',ul);

  h2 = document.createElement('h2');
  h2.textContent = '検索結果2件目';
  ul.insertAdjacentElement('afterend',h2);
  ul = document.createElement('ul');
  li = document.createElement('li');
  li.textContent = '開始時刻:' + data.list.g1[1].start_time;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '終了時刻:' + data.list.g1[1].end_time;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'チャンネル:' + data.list.g1[1].service.name;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'タイトル:' + data.list.g1[1].title;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = 'サブタイトル:' + data.list.g1[1].subtitle;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '番組説明:' + data.list.g1[1].content;
  ul.insertAdjacentElement('beforeend',li);
  li = document.createElement('li');
  li.textContent = '出演者:' + data.list.g1[1].act;
  ul.insertAdjacentElement('beforeend',li);
  h2.insertAdjacentElement('afterend',ul);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('searchButton');
  button.addEventListener('click', sendRequest);
});


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const channel = document.getElementById('channelInput').value.trim();
  const genre = document.getElementById('genreInput').value.trim();

  console.log("チャンネル:", channel);
  console.log("ジャンル:", genre);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

