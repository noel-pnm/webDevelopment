// Let the user pass an arguement n that will output a chessboard of size n x n. 
// The newline character is \n
// The board must alternate between spaces ' ' and '#' 

// function chessboard(n){
//     let rowsize = ''
//     for (let column = 0; column < n; column++){
//         if (column % 2 == 0){
//             for (let row = 0; row < n; row++){
//                 if (row % 2 == 0){
//                     rowsize += ' '
//                 } else{
//                     rowsize += '#'
//                 }
//             }
//         } else if (column % 2 == 1){
//             for (let row = 0; row < n; row++){
//                 if (row % 2 == 0){
//                     rowsize += '#'
//                 } else{
//                     rowsize += ' '
//                 }
//             } 
//         }
//         rowsize += '\n'
//     }
//     console.log(rowsize)
// }

let chessboard = function(n){
    let rowsize = ''
    for (let column = 0; column < n; column++){
        if (column % 2 == 0){
            for (let row = 0; row < n; row++){
                if (row % 2 == 0){
                    rowsize += ' '
                } else{
                    rowsize += '#'
                }
            }
        } else if (column % 2 == 1){
            for (let row = 0; row < n; row++){
                if (row % 2 == 0){
                    rowsize += '#'
                } else{
                    rowsize += ' '
                }
            } 
        }
        rowsize += '\n'
    }
    console.log(rowsize)
}