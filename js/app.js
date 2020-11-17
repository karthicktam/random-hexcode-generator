const body = document.querySelector("body");
const button = document.querySelector("a");
const span = document.querySelector("#hex-value");
const array = "0123456789ABCDEFabcdef".split("");

const backgroundChanger = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += array[Math.floor(Math.random() * array.length)];
    }
    console.log(hexCode);
    span.innerHTML = hexCode;
    body.style.backgroundColor = hexCode;
}

button.addEventListener('click', backgroundChanger);