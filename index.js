const htmlCode = document.querySelector(".html-editor");
const cssCode = document.querySelector(".css-editor");
const jsCode = document.querySelector(".js-editor");
const output = document.querySelector("#output");

function runCode() {
    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
}

htmlCode.oninput = function () {
    save();
    runCode();
}

cssCode.oninput = function () {
    save();
    runCode();
}

jsCode.oninput = function () {
    save();
    runCode();
}

document.querySelector(".run-button").addEventListener("click", function () {
    runCode();
})

document.querySelector(".clear-button").addEventListener("click", function () {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";
    output.contentDocument.body.innerHTML = "";
    localStorage.clear();
})

// responsive

const btnHTML = document.querySelector(".btn-html");
const btnCSS = document.querySelector(".btn-css");
const btnJS = document.querySelector(".btn-js");

const htmlEditor = document.querySelector(".editor-one");
const cssEditor = document.querySelector(".editor-two");
const jsEditor = document.querySelector(".editor-three");

btnHTML.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnHTML.style.backgroundColor = "#42e9b2";
    btnHTML.style.color = "black";
    btnCSS.style.backgroundColor = "";
    btnCSS.style.color = "white";
    btnJS.style.backgroundColor = "";
    btnJS.style.color = "white";

    htmlEditor.style.display = "flex";
    cssEditor.style.display = "none";
    jsEditor.style.display = "none";
    output.style.height = "";
})

btnCSS.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnCSS.style.backgroundColor = "#42e9b2";
    btnCSS.style.color = "black";
    btnHTML.style.backgroundColor = "";
    btnHTML.style.color = "white";
    btnJS.style.backgroundColor = "";
    btnJS.style.color = "white";

    cssEditor.style.display = "flex";
    htmlEditor.style.display = "none";
    jsEditor.style.display = "none";
    output.style.height = "";
})

btnJS.addEventListener("click", function () {
    document.querySelector(".container").style.display = "flex";
    btnJS.style.backgroundColor = "#42e9b2";
    btnJS.style.color = "black";
    btnHTML.style.backgroundColor = "";
    btnHTML.style.color = "white";
    btnCSS.style.backgroundColor = "";
    btnCSS.style.color = "white";

    jsEditor.style.display = "flex";
    cssEditor.style.display = "none";
    htmlEditor.style.display = "none";
    output.style.height = "";
})

const btnResult = document.querySelector(".btn-result");
btnResult.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    output.style.height = "100vh";
    btnHTML.style.backgroundColor = "";
    btnCSS.style.backgroundColor = "";
    btnJS.style.backgroundColor = "";
    btnJS.style.color = "";
})

function save() {
    const obj = {
        htmlKey: htmlCode.value,
        cssKey: cssCode.value,
        jsKey: jsCode.value
    }
    localStorage.setItem("code", JSON.stringify(obj));
}

function fetch() {
    let code = JSON.parse(localStorage.getItem("code"));
    if (code !== null) {
        htmlCode.value = code["htmlKey"];
        cssCode.value = code["cssKey"];
        jsCode.value = code["jsKey"];
    }
}

fetch();
runCode();