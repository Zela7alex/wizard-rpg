import { characterData } from './data.js'

import Character from '/Character.js'


// Creates each new character 
const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)


//** FUNCTION - renders html for each character
function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()

    document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}
render();


function attack() {
  wizard.takeDamage(wizard.currentDiceScore)
  orc.takeDamage(orc.currentDiceScore)
  wizard.getDiceHtml()
  orc.getDiceHtml()
  render();

  if (wizard.dead || orc.dead){
    endGame();
  }
}

function endGame() {
  const endMessage = wizard.health === 0 && orc.health === 0 ? "No victors - all creatures are dead" : 
  wizard.health > 0 ? 'The Wizard Wins' :
  "The Orc is Victorious"

  const endEmoji = wizard.health > 0 ? "🔮" :"☠️"
  document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`
}

document.getElementById('attack-button').addEventListener('click', attack) 