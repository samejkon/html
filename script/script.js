document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("popup");
  const authPopup = document.getElementById("auth-popup");
  const closePopup = document.getElementById("close-popup");
  const switchToRegister = document.getElementById("switch-to-register");
  const switchToLogin = document.getElementById("switch-to-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Open popup
  loginLink.addEventListener("click", (e) => {
    e.preventDefault();
    authPopup.classList.remove("d-none");
  });

  // Close popup
  closePopup.addEventListener("click", () => {
    authPopup.classList.add("d-none");
  });

  // Switch to Register Form
  switchToRegister.addEventListener("click", () => {
    loginForm.classList.add("d-none");
    registerForm.classList.remove("d-none");
  });

  // Switch to Login Form
  switchToLogin.addEventListener("click", () => {
    registerForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
  });
});
