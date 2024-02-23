//Create a mouse object that has four properties and three methods
// let mouse = {
//     color: "white",
//     type: "field",
//     size: "small",
//     diseased: true,
//     run: function(){},
//     hide: function(){},
//     eat: function(){}
// }

// Object Constructor Function
function MakeMouse (mouseColor, mouseType, mouseSize, diseasedStatus) {
    this.color = mouseColor
    this.type = mouseType
    this.size = mouseSize
    this.diseased = diseasedStatus
    // this.bluetooth = true
    this.run = function(){}
    this.hide = function(){}
    this.eat = function(){}
}

let mickey = new MakeMouse('Black', 'Cartoon', 'Life Sized', true)

