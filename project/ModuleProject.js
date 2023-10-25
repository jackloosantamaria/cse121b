const prophetsElement = document.getElementById(`prophets`);
let prophetList = [];

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const profeta = document.createElement(`profeta`);
        const H3 = document.createElement(`h3`);
        H3.textContent = prophet.prophetName;
        const img = document.createElement(`img`);
        img.src = prophet.imageUrl;
        img.alt = prophet.born;
        
        profeta.appendChild(H3);
        profeta.appendChild(img);
        prophetsElement.appendChild(profeta);
    })
};

const getProphets = async () => {
    //const answer = await fetch("https://run.mocky.io/v3/3058d0e0-49c4-49f1-94fb-19c0bc787927");
    const answer = await fetch(`https://raw.githubusercontent.com/jackloosantamaria/cse121b/main/scripts/prophets.json`);
    prophetList = await answer.json();
    displayProphets(prophetList);
};

export {prophetsElement, prophetList, displayProphets, getProphets};