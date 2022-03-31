
// Data Variables for characters
const hero = {
    elementId: 'hero',
    name: 'Wizard',
    avatar: 'images/wizard-1.jpg',
    health: 60,
    diceRoll: 10
}

const monster = {
    elementId: 'monster',
    name: 'Orc',
    avatar: 'images/orc-1.jpg',
    health: 10,
    diceRoll: 4
}



//**FUNCTION - dynamically creates html for each character */
function renderCharacter(data) {
    const { elementId, name, avatar, health, diceRoll } = data
    document.getElementById(elementId).innerHTML = `
                <div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatar}"/>
                    <p class="health">health: <b>${health}</b></p>
                    <div class="dice-container"><div class="dice">${diceRoll}</div></div>
                </div>        
`
}

renderCharacter(hero)

renderCharacter(monster)