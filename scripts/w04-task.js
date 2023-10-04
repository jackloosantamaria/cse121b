/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jack Loo",
    photo: "images/JackPhoto.png",
    favoriteFoods: ["Cheesecake", "Shrimps", "Steak", "Potato Salad", "Brownie"],
    hobbies: ["Reading", "Cooking", "Watching Movies", "Travel"],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "San Miguelito, Panama, Republic of Panama",
        length: "18 years"
    },
    {
        place: "Guatemala City, Guatemala",
        length: "2 years"
    },
    {
        place: "Panama City, Panama, Republic of Panama",
        length: "11 years"
    }
);



/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
/* Name */

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent= place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
