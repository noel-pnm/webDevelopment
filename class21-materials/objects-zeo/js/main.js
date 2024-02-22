//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    // Properties (keys-values)
    size: 'medium',
    shape: 'round',
    model: 'timex',
    color: 'black',
    //methods (functions, behaviors)
    beep: function (){console.log("beep")},
    boop: function (){console.log("boop")},
    baap: function (){console.log(this.model)}
}