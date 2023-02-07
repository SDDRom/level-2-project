import { reactiveFunctions } from "./functionz.js";
let signInName = document.querySelector('#text-field');
let userName = document.querySelector('#userName');
let signupButton = document.querySelector('button.signup-button');
let formElement = document.querySelector('form');
const emailField = document.querySelector('#Email');
const signInBtn = document.querySelector('.submit-button');
let signUpPasswordField  = document.querySelector('#password-signup');// Getting password field for signup as object
let signInPasswordField  = document.querySelector('#password-signin');// getting password for sign in as object
let signInuserNameField = document.querySelector('#text-field');

if (signupButton) {
	signupButton.addEventListener('click', reactiveFunctions.signUp)
}
if (signInBtn) {
	signInBtn.addEventListener('click', reactiveFunctions.signIn);
}