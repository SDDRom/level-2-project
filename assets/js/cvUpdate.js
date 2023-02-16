const myName =  document.querySelector('h1#my-name');
const myOccupation = document.querySelector('p#occupation');
const  myPerson = document.querySelector('about-person');
const  myWorked = document.querySelector('place-worked');
console.log('myName ',myName);

const cvInLocalStorage = JSON.parse(localStorage.getItem('Curriculum Vitae'));
myName.textContent = cvInLocalStorage.Name;
myOccupation.textContent = cvInLocalStorage.cvOccupation;
// const me = cvInLocalStorage.Name;
// console.log(me);
