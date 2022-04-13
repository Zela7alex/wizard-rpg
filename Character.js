

import {getDiceRollArray, getDicePlaceholderHtml} from '/utils.js'

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth)/ maximumHealth


//*** CONSTRUCTOR FUNCTION - creates new characters 
function Character(data){
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce(function(total, num){
            return total + num
        })
        this.health -= totalAttackScore
        if (this.health <= 0){
            this.dead = true
            this.health = 0
        }
    }

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : ''}" 
            style="width: ${percent}%;">
        </div>
    </div>`
    }



    this.getCharacterHtml = function () {
    //Destructored object for character data >>>
    const { elementId, name, avatar, health, diceRoll, diceCount, diceArray } = this
    //generating html for diceCount, this will now create the html for the total dice >>>
    const diceHtml = this.getDiceHtml(diceCount)
    //
    const healthBar = this.getHealthBarHtml()
    //Template literal that generates html for each character card>>
    return`
                <div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatar}"/>
                    <div class="health">health: <b>${health}</b></div>
                    ${healthBar}
                    <div class="dice-container"> 
                    ${diceArray}
                </div>        
`

    }

    //Method inside Constructor that generates html for dice --- gets diceRollArray() and generates the html that gets pushed to ${diceHtml} in getCharacterHtml() Method. >>>

    this.getDiceHtml = function (){
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')

      
    }
};

export default Character