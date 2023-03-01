//on change event on <select> tag

const department = document.querySelector("#department");
// console.log(department);
department.addEventListener("change", handleDepartment);

function handleDepartment(e) {
  console.log(e.target.value);
}
