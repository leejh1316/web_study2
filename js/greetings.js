const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:nth-child(1)");
const nameInput = document.querySelector(".name-input");
const greetingForm = document.querySelector(".box-greeting");
const logOutInput = document.querySelector(".logOut");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingForm.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(localStorage.getItem(USERNAME_KEY));
}

function onLogOutSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  nameInput.value = "";
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetingForm.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log(username);
  greeting.innerHTML = `Hello ${username}`;
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greetingForm.addEventListener("submit", onLogOutSubmit);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingForm.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(localStorage.getItem(USERNAME_KEY));
  loginForm.addEventListener("submit", onLoginSubmit);
  greetingForm.addEventListener("submit", onLogOutSubmit);
}
