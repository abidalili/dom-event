//3.keyboard Event
// 1.keydown- pressing a key, can repeat
// 2.keypress (may not supported by some broweser)
// 3. keyup
// some properties- key, keyCode, code, shiftKey, ctlKey, repeat

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
  // console.log("keydown");
  if (e.repeat) {
    alert("do not repeat");
  }
});
// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });
// textarea.addEventListener("keyup", function (e) {
//   if (e.shiftKey) {
//     console.log("shift+" + e.key);
//   }
// });
