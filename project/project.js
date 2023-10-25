import { prophetsElement, prophetList, displayProphets, getProphets } from "./ModuleProject.js";
//getProphets.init();
//console.log(getProphets());
// const prophetsElement = document.getElementById("prophets");
// let prophetList = [];
//
// const displayProphets = (prophets) => {
//     prophets.forEach((prophet) => {
//         const profeta = document.createElement("profeta");
//         const H3 = document.createElement("h3");
//         H3.textContent = prophet.prophetName;
//         const img = document.createElement("img");
//         img.src = prophet.imageUrl;
//         img.alt = prophet.born;
        
//         profeta.appendChild(H3);
//         profeta.appendChild(img);
//         prophetsElement.appendChild(profeta);
//     })
// };

// const getProphets = async () => {
//     //const answer = await fetch("https://run.mocky.io/v3/3058d0e0-49c4-49f1-94fb-19c0bc787927");
//     const answer = await fetch("https://raw.githubusercontent.com/jackloosantamaria/cse121b/main/scripts/prophets.json");
//     prophetList = await answer.json();
//     displayProphets(prophetList);
// };

function clear(){
    const profeta = prophetsElement.querySelectorAll(`profeta`);
    profeta.forEach((profeta) => {prophetsElement.removeChild(profeta)});
};

//export{prophetsElement, prophetList, displayProphets, getProphets, clear};

let fullName = `Jack Loo`;
const nameElement = document.getElementById(`name`);
nameElement.innerHTML = `<strong>${fullName}</strong>`;

let projectName = `Program to Sort Prophets`
const prophetName = document.getElementById(`name2`);
prophetName.innerHTML = `<strong>${projectName}</strong>`


function sortBy (prophets){
    clear();

    const filter = document.getElementById(`sortBy`).value;

    console.log(filter);
    switch(filter){
        case "utah":
            console.log(`utah`);
            const Utahp = prophets.filter(function (prophet) {return prophet.born.toLowerCase().includes("utah")});
            console.log(Utahp);
            displayProphets(Utahp);
            break; 
        case "notutah":
            console.log(`notutah`);
            const Notutahp = prophets.filter(function (prophet) {return !prophet.born.toLowerCase().includes("utah")});
            displayProphets(Notutahp);
            break;
        case "older":
            console.log(prophets);
            const OlderP = prophets.filter(function(prophet) {return (prophet.age) >50});
            console.log(`older`, OlderP);
            displayProphets(OlderP);
            break;
        case "younger":
            console.log(prophets);
            const YoungerP = prophets.filter(function (prophet) {return (prophet.age) < 50});
            console.log(`younger`, YoungerP);
            displayProphets(YoungerP);
            break;
        case "all":
            displayProphets(prophets);
            break;
    }
};



document.querySelector("#sortBy").addEventListener(`change`, () => {sortBy(prophetList) });
getProphets();
