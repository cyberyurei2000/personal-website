/*
CREDITS
- NHK earthquake warning sound: https://commons.nicovideo.jp/works/nc334201
- FNN (Fuji TV) breaking news telop sound: https://commons.nicovideo.jp/works/nc168566
*/

var place = document.getElementById("easteregg-placeholder");
var trigger = document.getElementById("easteregg-trigger");

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
    let audio = new Audio("/resources/sounds/nhk.mp3");

    trigger.innerHTML = "<span>Somewhere...</span>"
    setTimeout(function() { audio.play() }, 1000);
    setTimeout(function() { place.innerHTML = mini_alert }, 1100);
    setTimeout(function() { place.innerHTML += alert }, 3300);
    setTimeout(function() { place.innerHTML = alert }, 10000);
    setTimeout(function() { place.innerHTML = "" }, 20000);
    setTimeout(function() { telop() }, 21000);
}

function telop() {
    let title = `
    <div class="telop-title">
        <span>ZNNニュース速報</span>
    </div>`;
    let audio = new Audio("/resources/sounds/fnn.wav");

    place.innerHTML = `<div class="telop" id="telop"></div>`;
    let telop = document.getElementById("telop");

    if(document.body.className.match("me")) {
        setTimeout(function() { document.documentElement.scrollTop = 0 }, 500);
        setTimeout(function() { document.body.style.animationPlayState = "running" }, 1000);
        setTimeout(function() { audio.play() }, 4000);
        setTimeout(function() { telop.innerHTML = title }, 4000);
        setTimeout(function() { telop.innerText = "Congratulations! You discovered one of the website's secrets!" }, 12000);
        setTimeout(function() { telop.innerText = "" }, 25000);
    } else if(document.body.className.match("updates")) {
        setTimeout(function() { trigger.innerHTML = "" }, 1000);
        setTimeout(function() { audio.play() }, 1000);
        setTimeout(function() { telop.innerHTML = title }, 1000);
        setTimeout(function() { telop.innerHTML = "(*´∇｀)ﾉ　こんばんは～"}, 6000)
        setTimeout(function() { telop.innerText = "This is a news telop, will be used to report something in a more relaxed way on this website" }, 12000);
        setTimeout(function() { telop.innerHTML = "so far, there are only two telops, I'll leave the second one for you to find." }, 18000)
        setTimeout(function() { telop.innerText = "" }, 24000);
    }
}
