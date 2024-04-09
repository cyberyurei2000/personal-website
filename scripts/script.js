// Date & Fortunes
const dateElem = document.getElementById("date");
const fortuneElem = document.getElementById("fortune");

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

var list = [
    "Do a barrel roll",
    "Install Gentoo",
    "This song is pure sex",
    "Please send all complaints to /dev/null",
    "Thank you, for everything",
    "No matter where you go, everyone's connected.",
    "Remember, with great power comes great responsibility.",
    "Not quite my tempo",
    "Are we still partners?",
    "How disgusting",
    "You Only Live Once",
    "I know what you were doing...",
    "980 - 1416 - 1523",
    "I SURVIVED THE ENDLESS EIGHT",
    "Let's all love Lain",
    "What the hell am I doing here?",
    "You can take advantage of everything here, except me"
]
var num = Math.floor(Math.random() * list.length);

const now = new Date();
//dateElem.innerText = `${now.getFullYear()}/${("0" + (now.getMonth() + 1)).slice(-2)}/${("0" + now.getDate()).slice(-2)} • ${("0" + now.getHours()).slice(-2)}:${("0" + now.getMinutes()).slice(-2)}`;
dateElem.innerText = `${("0" + now.getHours()).slice(-2)}:${("0" + now.getMinutes()).slice(-2)}`;
switch(month) {
    case 12:
        switch(day) {
            case 31:
                fortuneElem.innerText = "❄️ Happy New Year!";
                break;
            default:
                if((day >= 1 && day <= 23) || (day >= 26 && day <= 30)) {
                    fortuneElem.innerText = "❄️ Happy holidays!";
                } else {
                    fortuneElem.innerText = list[num];
                }
                break;
        }
        break;
    case 1:
        switch(day) {
            case 1:
                fortuneElem.innerHTML = "❄️ Happy New Year!";
                break;
            case 2:
                fortuneElem.innerHTML = "❄️ Happy New Year!";
                break;
            default:
                //fortuneElem.innerText = "⠀";
                fortuneElem.innerText = list[num];
                break;
        }
        break;
    default:
        fortuneElem.innerText = list[num];
        break;
}

// Webver
var dialog_place = document.getElementById("webver-placeholder");
var dialog_trigger = document.getElementById("webver-trigger");

function display_webver() {
    let dialog = `
    <div class="about-dialog">
        <div class="about-dialog-header">
            <span>About this page</span>
            <div>
                <button class="dialog-button window-button" onclick="close_webver()">
                    <strong>X</strong>
                </button>
            </div>
        </div>
        <table class="about-dialog-main" cellspacing="0" cellpadding="0">
            <tr>
                <td class="about-dialog-banner">
                    <p class="banner-text">サイバー幽霊</p>
                </td>
                <td class="about-dialog-content">
                    <div class="content-text-top">
                        <p>サイバー幽霊</p>
                        <p>Version 2024.04.09</p>
                        <p>Copyright (C) 2023-2024 cyber_yurei2000</p>
                    </div>
                    <div class="content-text-bottom">
                        <p>This product is hosted on Neocities and licensed under the 3-Clause BSD License to:</p>
                        <p>Visitor</p>
                        <hr>
                        <button class="dialog-button normal-button" onclick="close_webver()">OK</button>
                    </div>
                </td>
            </tr>
        </table>
    </div>
    `;

    dialog_trigger.innerHTML = `<a href="#">Help?</a>`;
    dialog_place.innerHTML = dialog;
}

function close_webver() {
    dialog_place.innerHTML = "";
    dialog_trigger.innerHTML = `<a href="#" onclick="display_webver()">Help?</a>`;
}
