const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navList.classList.remove('active');
}));

const form = document.getElementById("form");

const email = document.getElementById("email");

function setErrorFor(message) {
  const formControl = document.querySelector('error');
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;
  // add error class
  // formControl.classList = 'error';
}

function isEmail(email) {
  if(email.toLowerCase() === email) {
    return true;
  } else {
    return false;
  }
  // let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  // return regx.test(email);
}

function checkInputs(event) {
  // get the value from inputs
  const emailValue = email.value;

  // alert(emailValue);
  if(isEmail(emailValue)) {
    alert("Working");
    return true;
  } else {
    // alert("not Working")
    setErrorFor('Invalid Email, it should only contain lowercase');
    event.preventDefault();
    return false;
  }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
  
  checkInputs();
})
