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
    "What the hell am I doing here?"
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
