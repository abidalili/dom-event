//load,unload
//scroll
//resize
//toggle

// window.addEventListener("load", function () {
//   console.log("load");
// });
// window.addEventListener("unload", function () {
//   console.log("unload");
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll");
// });

// window.addEventListener("resize", function () {
//   const width = window.outerWidth;
//   const height = window.outerHeight;
//   console.log(`height: ${height}, width: ${width}`);
// });

//toggle
const details = document.querySelector("details");
details.addEventListener("toggle", function (e) {
  console.log(e.target.open);
});
