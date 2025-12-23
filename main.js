let mainCount = 0;
let mmSecCount = 0;
let secCount = 0;
let minCount = 0;
let hrCount = 0;

// タイマーIDを入れる変数を 関数の外側で宣言
let mainTimer = null;

function startEvent() {
    // あらかじめタイマーIDが存在しない(=タイマーが起動中でない)
    if (mainTimer !== null) return;
    mainTimer = setInterval(function () {
        mainCount++;
        let mmSecNumber = document.querySelector('.mmsec');
        mmSecNumber.textContent = mmSecCount;
        let secNumber = document.querySelector('.sec');
        secNumber.textContent = secCount;
        let minNumber = document.querySelector('.min');
        minNumber.textContent = minCount;
        let hrNumber = document.querySelector('.hr');
        hrNumber.textContent = hrCount;

        if (mainCount % 3600 === 0) {
            minCount = 0;
            hrCount++;
        } else {
            if (mainCount % 600 === 0) {
                secCount = 0;
                minCount++;
            } else {
                if (mainCount % 10 === 0) {
                    mmSecCount = 0;
                    secCount++;
                } else {
                    mmSecCount++;
                }

            }

        }
    }, 100);
}

// stop時(mainTimerを止めて タイマーidをnull化)
function stopEvent() {
    clearInterval(mainTimer);
    mainTimer = null;
}
// reset時(一括で0へ)
function resetEvent() {
    mainCount = 0;
    mmSecCount = 0;
    secCount = 0;
    minCount = 0;
    hrCount = 0;
    let mmSecNumber = document.querySelector('.mmsec');
    mmSecNumber.textContent = mmSecCount;
    let secNumber = document.querySelector('.sec');
    secNumber.textContent = secCount;
    let minNumber = document.querySelector('.min');
    minNumber.textContent = minCount;
    let hrNumber = document.querySelector('.hr');
    hrNumber.textContent = hrCount;
}

// html上の～というクラス名を持つ部分を～という変数に入れる
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// ～という変数の部分に　～したら～のイベントが発生の効果をつける
startBtn.addEventListener('click', startEvent, false);
stopBtn.addEventListener('click', stopEvent, false);
resetBtn.addEventListener('click', resetEvent, false);
resetBtn.addEventListener('click', stopEvent, false);

// ボタンの無効化切り替え
startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}, false);
stopBtn.addEventListener('click', function() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
}, false);
resetBtn.addEventListener('click', function() {
    startBtn.disabled = false;
    stopBtn.disabled = false;
}, false);
