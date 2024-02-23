//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeFighter (hp, mp, punch, kick){
    //Key = Value 
    this.hp = hp
    this.mp = mp
    this.punch = punch
    this.kick = kick
    this.basicAttack = function(){}
    this.strongAttack = function(){}
    this.finisher = function(){}
}

let saitama = new MakeFighter (500, 250, -100, -150)