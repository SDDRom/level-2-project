import { createACv } from "./createCv.js";
import { createElementsAndAppend } from "./createElement.js";
import { reactiveFunctions } from "./functionz.js";
createACv
createElementsAndAppend
let signInName = document.querySelector('#text-field');
let userName = document.querySelector('#userName');
let signupButton = document.querySelector('button.signup-button');
let formElement = document.querySelector('form');
const emailField = document.querySelector('#Email');
const signInBtn = document.querySelector('.submit-button');
let signUpPasswordField  = document.querySelector('#password-signup');// Getting password field for signup as object
let signInPasswordField  = document.querySelector('#password-signin');// getting password for sign in as object
let signInuserNameField = document.querySelector('#text-field');


// getting classes for every textArea

const cvName = document.querySelector('#named');
const cvOccupation = document.querySelector('#occupation');
const placeWorked = document.querySelector('#place-worked');
const dateWorked = document.querySelector('.date-worked');

const workDescription = document.querySelector('#work-description');
const addExperience = document.querySelector('.add-experience');//this is a button to add  experience
const createCv = document.querySelector('button.create-cv')

const addSchool = document.querySelector('button.add-school');// his is a button to add school
const schoolDescription = document.querySelector('#certificate-obtained');
const schoolAttended = document.querySelector('#school-attended');
const academicYear = document.querySelector('.academic-year');

const myName =  document.querySelector('#myName');
const myOccupation = document.querySelector('p#occupation');
const  myPerson = document.querySelector('about-person');
const  myWorked = document.querySelector('place-worked');

if(createCv){
	createCv.addEventListener('click', (event)=>{
		createACv.createCvObject(event,myName)
	});
	
}

if (signupButton) {
	signupButton.addEventListener('click', reactiveFunctions.signUp)
}
if (signInBtn) {
	signInBtn.addEventListener('click', reactiveFunctions.signIn);
}