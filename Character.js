

import {getDiceRollArray} from '/utils.js'


//*** CONSTRUCTOR FUNCTION - creates new characters 
function Character(data){
    Object.assign(this, data)

    //** Method inside Constructor that creates the html for each character 
    this.getCharacterHtml = function () {
        //^^Destructored object for character data 
    const { elementId, name, avatar, health, diceRoll, diceCount } = this

    //^^generating html for diceCount, this will now create the html for the total dice 
    const diceHtml = this.getDiceHtml(diceCount)

    //^^Template literal that generates html for each character card
    return`
                <div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatar}"/>
                    <p class="health">health: <b>${health}</b></p>
                    <div class="dice-container"> 
                    ${diceHtml}
                </div>        
`

    }

    //**Method inside Constructor that generates html for dice --- gets diceRollArray() and generates the html that gets pushed to ${diceHtml} in getCharacterHtml() Method.

    this.getDiceHtml = function (diceCount){
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')

        // Remmeber to change getDiceHtml invoke inside getCharacterHtml method to this.getDiceHtml
    }
}

export default Character