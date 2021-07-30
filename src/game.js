class Game{
    constructor(player1, player2){
        this.player1 = player1 
        this.player2 = player2 
        this.isPlayer1Turn = true
    }

    attack(){
        if(this.isPlayer1Turn){
            this.player2.health -= 10
        }
        else{
            this.player1.health -= 10 
        }
        this.isPlayer1Turn = !this.isPlayer1Turn
    }
}

module.exports = Game