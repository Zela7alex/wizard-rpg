import { characterData } from './data.js'
import Character from './Character.js'

let monstersArray = ["orc", "demon", "goblin"];


function getNewMonster() {
  // extracting all the data from Character data to then remove each character from array so it changes to a new character >>>
  const nextMonsterData = characterData[monstersArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}


function attack() {
  wizard.takeDamage(wizard.currentDiceScore)
  monster.takeDamage(monster.currentDiceScore)
  wizard.getDiceHtml()
  monster.getDiceHtml()
  render();

  if (wizard.dead) {
    endGame();
  } else if (monster.dead) {
    if (monstersArray.length > 0) {
      monster = getNewMonster()
   
    } else {
      endGame()
    }
  }
}

function endGame() {
  const endMessage = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead" :
    wizard.health > 0 ? 'The Wizard Wins' :
      "The Orc is Victorious"

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️"
  document.body.innerHTML = `<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`
}

document.getElementById('attack-button').addEventListener('click', attack)

// Creates each new character 
const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render();

//** FUNCTION - renders html for each character
function render() {
  document.getElementById('hero').innerHTML = wizard.getCharacterHtml()

  document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

