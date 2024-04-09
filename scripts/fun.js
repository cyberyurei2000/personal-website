// Fake J-Alert

/*
CREDITS
- NHK earthquake warning audio: https://commons.nicovideo.jp/works/nc334201
- FNN (TV Fuji) breaking news telop audio: https://commons.nicovideo.jp/works/nc168566
*/

var jalert_place = document.getElementById("easteregg-placeholder");
var jalert_trigger = document.getElementById("easteregg-trigger");

function fix_audio(audio) {
    audio.play();
    audio.pause();
    audio.currentTime = 0;
}

function fake_jalert() {
    let alert = `
    <div class="alert">
        <div class="alert-top">
            <span class="alert-top-text">
                <strong>緊急地震速報（氨象厅）</strong>
                <span class="alert-top-additional">追加地域</span>
            </span>
        </div>
        <div class="alert-bottom">
            <p class="alert-bottom-text">
                <strong>パラー州で地震　強い揺れに警戒</strong>
            </p>
            <p class="alert-bottom-list">ベレン</p>
        </div>
        <img class="alert-map" src="/resources/images/fun/map.webp" alt="map">
    </div>`;
    let mini_alert = `
    <div class="mini-alert">
        <div class="mini-alert-top">
            <span>パラー州で地震</span>
        </div>
        <div class="mini-alert-bottom">
            <span>強い揺れに警戒</span>
        </div>
        <div class="mini-alert-simple">
            <span>緊急地震速報</span>
        </div>
    </div>`;
    /*let audio = new Audio("/resources/sounds/nhk.mp3");*/
    let audio = new Audio("https://files.catbox.moe/zrbomb.mp3");

    jalert_trigger.innerHTML = "<span>Somewhere...</span>"
    fix_audio(audio);
    setTimeout(function() { audio.play() }, 1000);
    setTimeout(function() { jalert_place.innerHTML = mini_alert }, 1100);
    setTimeout(function() { jalert_place.innerHTML += alert }, 3300);
    setTimeout(function() { jalert_place.innerHTML = alert }, 10000);
    setTimeout(function() { jalert_place.innerHTML = "" }, 20000);
    setTimeout(function() { telop() }, 21000);
}

function telop() {
    let title = `
    <div class="telop-title">
        <span>ZNNニュース速報</span>
    </div>`;
    /*let audio = new Audio("/resources/sounds/fnn.wav");*/
    let audio = new Audio("https://files.catbox.moe/10p8nf.wav");

    jalert_place.innerHTML = `<div class="telop" id="telop"></div>`;
    let telop = document.getElementById("telop");

    fix_audio(audio);
    if(document.body.className.match("me")) {
        setTimeout(function() { document.documentElement.scrollTop = 0 }, 500);
        setTimeout(function() { document.body.style.animationPlayState = "running" }, 1000);
        setTimeout(function() { audio.play() }, 4000);
        setTimeout(function() { telop.innerHTML = title }, 4000);
        setTimeout(function() { telop.innerText = "Congratulations! You discovered one of the website's secrets!" }, 12000);
        setTimeout(function() { telop.innerText = "" }, 25000);
    }
}
