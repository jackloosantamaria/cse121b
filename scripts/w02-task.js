/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Jack Loo';
let currentYear = '2023';
let profilePicture = 'images/JackPhoto.png';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');
/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = '2023';
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ['Cheesecake', ' Shrimps', ' Steak', ' Potato Salad'];
foodElement.innerHTML += `<br>${favFoods}`;
let favFoods2 = [' Brownie', ' Tres Leches Cake', ' Sweet and Sour Pork'];
favFoods.push(favFoods2);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift('Cheesecake');
foodElement.innerHTML += `<br>${favFoods}`;
favFoods2.pop(' Sweet and Sour Pork');
foodElement.innerHTML += `<br>${favFoods}`;


