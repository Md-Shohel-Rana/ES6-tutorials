// object

var billGates={shirt:true,shirtColor:"offwhite",smile:true,swetar:true,swetterColor:"gray",chosma:true}

// console.log(billGates['shirtColor']) // simple arry console korbo aivabe

// nested object

// var billGatesPro={
//     shirt:{
//         color:"offwhite",
//         Quality:"Good",
//         price:"200USD"
//     },
//     swatter:{
//         color:"gray",
//         Quality:"Good",
//         price:"230USD",
//         warm:"best"
//     },
//     face:{
//         smiling:true,
//         chosma:"Yes",
//         teeth:"white,Big"
//     }
// }
// console.log(billGatesPro['swatter']['price']);

// // tutorial 15 number

// more example

var sohelRana={
    tshirt:{
        color:"redwhite",
        price:"230usd",
        Quality:"Good",
        Company:{
            CompanyType:"foodCompany",
            area:"bangladesh",
            location:"dhaka"
        }
    }
}

console.log(sohelRana['tshirt']['Company']['CompanyType']);