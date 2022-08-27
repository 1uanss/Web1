let erroCadastro = document.querySelector("#erroCadastro");
let formsubmit = document.querySelector("#form-submit");

// console.log("okay");
formsubmit.onsubmit = (form) => {
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  //   console.log("test");
  if (email.value === "luan@gmail.com" && password.value === "123") {
    form.preventDefault();
    window.location.href = "../main/index.html";
  } else {
    erroCadastro.style.color = "red";
    erroCadastro.textContent = "Erro digite novamente.";
    form.preventDefault();
  }
};
