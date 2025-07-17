
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
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; 

  if (!data.list || !data.list.g1 || data.list.g1.length === 0) {
    resultDiv.textContent = '番組データが見つかりませんでした。';
    return;
  }

  data.list.g1.forEach((program, index) => {
    const h2 = document.createElement('h2');
    h2.textContent = `検索結果 ${index + 1} 件目`;
    resultDiv.appendChild(h2);

    const ul = document.createElement('ul');

    const items = [
      `開始時刻: ${program.start_time}`,
      `終了時刻: ${program.end_time}`,
      `チャンネル: ${program.service.name}`,
      `タイトル: ${program.title}`,
      `サブタイトル: ${program.subtitle}`,
      `番組説明: ${program.content}`,
      `出演者: ${program.act}`
    ];

    items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    });

    resultDiv.appendChild(ul);
  });
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('searchButton');
  button.addEventListener('click', sendRequest);
});


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const service = document.getElementById('serviceInput').value;
  const genre = document.getElementById('genreInput').value;

  const url = `https://www.nishita-lab.org/web-contents/jsons/nhk/${service}-${genre}-j.json`;

  axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);     

  console.log("チャンネル:", service);
  console.log("ジャンル:", genre);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
   let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);

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

