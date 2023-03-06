//dom events
//4.focus events
// <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,(focus event doesnt works with those elements)
// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

const input = document.querySelector("input");
input.addEventListener("blur", function (e) {
  // console.log("blur is occured");
  // input.style.backgroundColor = "transparent";
  // input.style.padding = "0rem";
  input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus", function (e) {
  // console.log("focus is occured");
  input.style.backgroundColor = "orange";
  input.style.padding = "2rem";
});
// input.addEventListener("focusin", function (e) {
//   console.log("focusin is occured");
// });
// input.addEventListener("focusout", function (e) {
//   console.log("focusout is occured");
// });
