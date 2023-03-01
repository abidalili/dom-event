/* <input /> - Text,Number, password, email, color, radio, checkbox, search, time, Date, datetime, week, month, url,tel, filr
<select>
<textarea> */ //change event works with those.

console.clear();

// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", ChangeHandler);

// function ChangeHandler(e) {
//   // console.log(e);
//   // console.log(e.type);
//   // console.log(e.target);
//   //   console.log(e.target.className);
//   console.log(e.target.value);
//}

// checkbox;

const programs = document.querySelectorAll("input[name=program]");
// console.log(programs);

Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler);
});
function programHandler(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}
