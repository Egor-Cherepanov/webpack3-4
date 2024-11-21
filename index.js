import "./index.css";
import JS_IMAGE from "./assets/Unofficial_JavaScript_logo_2.svg.png";

console.log("Hello World!");
[1, 2, 3].map((n) => n + 1);
console.log(JS_IMAGE);

// const bodyDiv = document.querySelector("div");

// const header = document.createElement("h1");
// header.textContent = "I love JavaScript";

const JSimg = document.createElement("img");
JSimg.src = JS_IMAGE;

document.body.append(JSimg);
// bodyDiv.append(header);
