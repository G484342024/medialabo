let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

b = document.querySelector('button#kaitou');
    b.addEventListener('click',hantei);


function hantei() {
    p = document.querySelector('span#kaisu');
    p2 = document.querySelector('span#answer');
    p3 = document.querySelector('input[name="seisuu"]');
    p4 = p3.value;
    yoso = Number(p4);
    kaisu += 1;
    p.textContent = kaisu + "回目の予想:" + yoso;



  
    if( kaisu > 3){
      p2.textContent = "答えは" + kotae + "でした。すでにゲームは終わっています。";
    }
    if(yoso === kotae){
    p2.textContent = "正解です。 おめでとう！";
    
    kaisu = 4;
    }
    
  



  if(yoso !== kotae){
    if(kaisu <= 2 && yoso > kotae) {
        p2.textContent = "まちがい。答えはもっと小さいですよ。";
    } else if(kaisu <= 2 && yoso < kotae ) {
        p2.textContent = "まちがい。 答えはもっと大きいですよ。";
    }else if(kaisu === 3 && yoso !== kotae){
        p2.textContent = "まちがい。 残念でした答えは" + kotae + "です。";
    }
  }
    
  
}
