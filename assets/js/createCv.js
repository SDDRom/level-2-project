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


export const createACv = {
    createCvObject: function (e, element) {
        e.preventDefault();
        const myCv = {
            Name: cvName.value,
            Occupation: cvOccupation.value,
            placesWorked: placeWorked.value,
            workYears: dateWorked.value,
            jobDescription: workDescription.value,
            school: schoolAttended.value,
            schoolDescript: schoolDescription.value,
            schoolYear: academicYear.value
        };

        localStorage.setItem('Curriculum Vitae', JSON.stringify(myCv));
        window.location.href = '../../pages/curriculum-vitae.html';
        console.log(cvInLocalStorage);
    }
};