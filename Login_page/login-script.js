const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");

function isFormValid() {
  return usernameInput.value !== "" && passwordInput.value !== "";
}

loginButton.disabled = true;

usernameInput.addEventListener("input", function() {
  loginButton.disabled = !isFormValid();
});

passwordInput.addEventListener("input", function() {
  loginButton.disabled = !isFormValid();
});



function voltar() {
    window.history.back();
  }