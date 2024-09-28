// *=====> html Element
let signUpName = document.querySelector("#signUpName");
let signUpEmail = document.querySelector("#signUpEmail");
let signUpPass = document.querySelector("#signUpPass");
let signInEmail = document.querySelector("#signInEmail");
let signInPass = document.querySelector("#signInPass");
let nameUser = document.querySelector("#nameUser");
let pargraph = document.querySelector("section p");
let btnLogOut = document.querySelector("btn-logout ");
let nameRegex = /^[A-Za-z0-9_-]{3,25}$/;
let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
let passwordRegex = /^[A-Za-z0-9\W]{6,25}$/;
let moode = document.querySelector(".mood");
let root = document.querySelector(":root");
let rootStyal = getComputedStyle(root);
// ~=====> app varibles
let newAcoount = [];
newAcoount = JSON.parse(localStorage.getItem("acoounts")) || [];

// ^=====> function
function caretAcoount() {
  if (!checkIsEmpty()) {
    if (!Validate(nameRegex, signUpName)) {
      pargraph.innerHTML = "Invalid user name of at least 3 characters";
      pargraph.classList.add("text-danger");
    } else if (!Validate(emailRegex, signUpEmail)) {
      pargraph.innerHTML = "Invalid email. You must enter an email.";
      pargraph.classList.add("text-danger");
    } else if (!Validate(passwordRegex, signUpPass)) {
      pargraph.innerHTML = "Invalid password must be at least 6 characters";
      pargraph.classList.add("text-danger");
    } else if (exist()) {
      pargraph.innerHTML = "email already exists";
      pargraph.classList.add("text-danger");
    } else {
      let userInfo = {
        userName: signUpName.value,
        email: signUpEmail.value,
        password: signUpPass.value,
      };
      newAcoount.push(userInfo);
      localStorage.setItem("acoounts", JSON.stringify(newAcoount));
      pargraph.innerHTML = "Success You can log in now.";
      pargraph.classList.add("text-success");
      pargraph.classList.replace("text-danger", "text-success");
      location.href = "login.html";
    }
  } else if (
    signUpName.value == "" ||
    signUpEmail.value == "" ||
    signUpPass.value == ""
  ) {
    pargraph.innerHTML = "All inputs is required";
    pargraph.classList.add("text-danger");
  }
}
function exist() {
  for (let i = 0; i < newAcoount.length; i++) {
    if (
      newAcoount[i].email == signUpEmail.value &&
      newAcoount[i].password == signUpPass.value
    ) {
      return true;
    }
  }
}
function checkIsEmpty() {
  if (
    signUpName.value != "" &&
    signUpPass.value != "" &&
    signUpEmail.value != ""
  ) {
    return false;
  } else {
    return true;
  }
}
function welcome() {
  for (let i = 0; i < newAcoount.length; i++) {
    nameUser.innerHTML = `welcome ${JSON.parse(
      localStorage.getItem("homeUser")
    )}`;
  }
}
function logInInfo() {
  for (let i = 0; i < newAcoount.length; i++) {
    if (
      newAcoount[i].email === signInEmail.value &&
      newAcoount[i].password === signInPass.value
    ) {
      var name = newAcoount[i].userName;
      localStorage.setItem("homeUser", JSON.stringify(name));
      location.href = "home.html";
    }
  }
}
function logIn() {
  if (signInEmail.value === "" && signInPass.value === "") {
    pargraph.innerHTML = "All inputs is required";
    pargraph.classList.add("text-success", "text-danger");
  } else if (
    !Validate(emailRegex, signInEmail) &&
    !Validate(passwordRegex, signInPass)
  ) {
    pargraph.innerHTML = "Email or password is not valid";
    pargraph.classList.add("text-success", "text-danger");
  } else if (logInInfo()) {
    logInInfo();
  } else {
    pargraph.innerHTML = "incorrect email or password";
    pargraph.classList.add("text-success", "text-danger");
  }
}
function logOut() {
  location.href = "login.html";
}
function Validate(regex, elemenet) {
  if (regex.test(elemenet.value)) {
    elemenet.classList.add("is-valid");
    elemenet.classList.remove("is-invalid");
    return true;
  } else {
    elemenet.classList.add("is-invalid");
    elemenet.classList.remove("is-valid");
    return false;
  }
}
// !=====!===> dark mood function
function mood() {
  if (moode.classList.contains("fa-sun")) {
    moode.classList.remove("fa-sun");
    moode.classList.add("fa-moon");
    moode.classList.replace("text-white", "text-dark");
    document.body.style.backgroundImage =
      "url(./assets/image/sky-3335585_1280.jpg)";
    root.style.setProperty("--form-h1-colore", " #232121");
    root.style.setProperty("--form-box-shadow-colore", " #f7dfdf");
    root.style.setProperty("--white-colore", " #000000");
    root.style.setProperty("--placeholder-colore", " #060505a6");
    root.style.setProperty("--form-control-border-colore", " #000000");
    root.style.setProperty("--form-btn-border-colore", " #000000");
    root.style.setProperty("--form-btn-colore", " #000000a2");
    root.style.setProperty("--form-btn-hover-bg-colore", " #0000003b");
    root.style.setProperty("--form-btn-hover-colore", " #000000");
    root.style.setProperty("--form-a-colore", " #000000");
    root.style.setProperty("--form-btn-foucs-box-sh-colore", " #000000");
    root.style.setProperty("--nav-logo-colore", " #000000");
    root.style.setProperty("--btn-outline-colore", " #0a0a0a");
    root.style.setProperty("--caption-colore", " #000000");
  } else {
    moode.classList.remove("fa-moon");
    moode.classList.add("fa-sun");
    moode.classList.replace("text-dark", "text-white");
    root.style.setProperty("--form-h1-colore", " #b1b1b1");
    root.style.setProperty("--form-box-shadow-colore", " #b1b1b1");
    root.style.setProperty("--white-colore", " #fff");
    root.style.setProperty("--placeholder-colore", " #ffffffa6");
    root.style.setProperty("--form-control-border-colore", " #6e6e6e");
    root.style.setProperty("--form-btn-border-colore", " #6e6e6e");
    root.style.setProperty("--form-btn-colore", " #ffffffa2");
    root.style.setProperty("--form-btn-hover-bg-colore", " #6e6e6ea3");
    root.style.setProperty("--form-btn-hover-colore", " #e5e5e5");
    root.style.setProperty("--form-a-colore", " #b6b1b1");
    root.style.setProperty("--form-btn-foucs-box-sh-colore", " #cac4c4");
    root.style.setProperty("--nav-logo-colore", " #b8c4cf");
    root.style.setProperty("--btn-outline-colore", " #95a1ac");
    root.style.setProperty("--caption-colore", " #d5c9c9");
    document.body.style.backgroundImage =
      "url(./assets/image/moon-7021271_1280.jpg)";
  }
}

// !=====> Events
