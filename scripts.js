const logregBox = document.querySelector('.logreg-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginlink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

function signUp(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get input values
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    // Perform your validation (optional)
    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Clear signup form fields (optional)
    document.getElementById('signupName').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';

     // Show login form after successful signup
     showLoginForm();

     return false; // Prevent form submission
 }

 function showSignUpForm() {
     document.getElementById('loginForm').style.display = 'none';
     document.getElementById('signupForm').style.display = 'block';
 }

 function showLoginForm() {
     document.getElementById('signupForm').style.display = 'none';
     document.getElementById('loginForm').style.display = 'block';

 }


function myfunction() {
    var show = document.getElementById('password');
    if (show.type=='password') {
        show.type='text';
    }
    else{
        show.type='password';
    }
}

