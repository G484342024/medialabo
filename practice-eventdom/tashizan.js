function tashizan(){
    let a = document.querySelector('input[name="left"]');
    let b = document.querySelector(' input[name="right"]');
    let ac = a.value;
    let bc = b.value;
    let n = Number(ac);
    let n1 = Number(bc);
    let span = document.querySelector('span#answer');
    span.textContent = n + n1;
    span.addEventListener('click',tashizan);
}
b = document.querySelector('button#calc');
b.addEventListener('click', tashizan);