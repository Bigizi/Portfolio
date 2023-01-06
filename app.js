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

const form = document.getElementById('form');

const email = document.getElementById('email');

// function setErrorFor(message) {
//   const formControl = document.querySelector('error');
//   const small = formControl.querySelector('small');

//   // add error message inside small
//   small.innerText = message;
//   // add error class
//   // formControl.classList = 'error';
// }

function isEmail(email) {
  if (email.toLowerCase() === email) {
    return true;
  }
  return false;
}

function checkInputs(event) {
  // get the value from inputs
  const emailValue = email.value;
  // alert(emailValue);
  if (isEmail(emailValue)) {
    return true;
  }
  // setErrorFor('Invalid Email, it should only contain lowercase');
  document.querySelector('.small').innerHTML = 'Invalid email. It should only contain lowercace';
  event.preventDefault();
  return false;
}

form.addEventListener('submit', checkInputs);
