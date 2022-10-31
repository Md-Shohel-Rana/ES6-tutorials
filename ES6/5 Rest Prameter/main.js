// Using rest parameter, a function can be called with any number of arguments.
// Rest parameter is prefixed with three dots(...).

// function Calculation(a,b,...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum=sum+i;
//     }
//     console.log(sum);
// }

// Calculation(1,2,4,5,67,8,9)

// function Calculation(...numbers){
//     let sum=0;
//     for(let i of numbers){
//         sum=sum+i;
//     }
//     console.log(sum);
// }

// Calculation(1,3,5,6,8,5,4,3)

function Calcultion(a,b,c,...numbers){
    let sum=0;
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);
}

Calcultion(10,20,30,1,2,3)