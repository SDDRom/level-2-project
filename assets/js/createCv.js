const cvName = document.querySelector('#named');
const cvOccupation = document.querySelector('#occupation');
const placeWorked = document.querySelector('#place-worked');
const dateWorked = document.querySelector('.date-worked');

const workDescription = document.querySelector('#work-description');
const addExperience = document.querySelector('.add-experience');//this is a button to add  experience

const addSchool = document.querySelector('button.add-school');// his is a button to add school
const schoolDescription = document.querySelector('#certificate-obtained');
const schoolAttended = document.querySelector('#school-attended');
const academicYear = document.querySelector('.academic-year');


const myName =  document.querySelector('h1#my-name');

export const createACv = {
    createCvObject : function (e){
        e.preventDefault();
        const myCv = {
            Name : cvName.value,
            Occupation : cvOccupation.value,
            placesWorked : placeWorked.value,
            workYears : dateWorked.value,
            jobDescription : workDescription.value,
            school : schoolAttended.value,
            schoolDescript : schoolDescription.value,
            schoolYear : academicYear.value
        };

        const storedCv =localStorage.setItem('Curriculum Vitae',JSON.stringify(myCv));

        const cvInLocalStorage = JSON.parse(localStorage.getItem('Curriculum Vitae'));
        myName.textContent = cvInLocalStorage.Name;

	window.location.href = '../../pages/curriculum-vitae.html';
       console.log(cvInLocalStorage);
    }
};