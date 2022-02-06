/*

► Ex 5 Done!
► Ex 6 Not Done??????????????

*/

// 5th. Flatten nested array with recursion

const nested1 = [1, [3, 4, [1,2]], 10];
const nested2 = [14, [1, [[[3,[]]]], 1], 0];

function flatten (array) {

    let arr = [];
    
    function help (array) {
    
        for (let i=0; i<array.length; i++) 
        {
            let element = array[i];
        
            if (Array.isArray(element)) {
                help(element);
            } else 
            {
            arr.push(element);
            }
        }
    }
    
    help(array);
    
    return arr;
}
    
console.log(flatten(nested1))
console.log(flatten(nested2))

//// աշխատանքային տարբերակ

// function flatten (array, help) {

//     let arr = [];
    
//     help (array, 0)
    
//     function help (array, i){
    
//         if (i === array.length) 
//     {
//         return array
//     }

//     else if (i <= array.length) {

//         array[i] = array[i+1]
        
//         help(array, i+1);

//         let element = array[i];
        
//         if (Array.isArray(element)) {
//                return help(element)
//             } else 
//             {
//             arr.push(element, i+1);
//             }
        
//         }
        
//     }
//     return arr;
// }
    
// console.log(flatten(nested1))
// console.log(flatten(nested2))


                console.log('------end of 5th ----')

// 6th. 

