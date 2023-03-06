//5.clipboard events
// 1. oncopy
// 2. oncut
// 3.onpaste
const input = document.querySelector("input");
const para = document.querySelector("p");

input.addEventListener("copy", function () {
  // console.log("you have coppied text");
  para.innerText = "you have copied";
});
input.addEventListener("cut", function () {
  // console.log("you have cutted text");
  para.innerText = "you have cut";
});
input.addEventListener("paste", function () {
  // console.log("you have pasted text");
  para.innerText = "you have pasted";
});
