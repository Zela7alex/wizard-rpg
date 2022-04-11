
//*** FUNCTION - get's random nums for dice roll array 
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 7)
    })
    //-----------Old Way of doing it >>>>>>>>>>>>>>
    // const randomDiceNum = []
    // for (let i = 0; i < diceCount; i++) {
    //     randomDiceNum.push(Math.floor(Math.random() * 7))
    // }
    // return randomDiceNum

}

export {getDiceRollArray}