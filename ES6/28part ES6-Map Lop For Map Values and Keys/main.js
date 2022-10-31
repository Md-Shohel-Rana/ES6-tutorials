// ES6- Loop For Map Values and Keys

var myMap=new Map();

myMap.set("key1","Bangladesh");
myMap.set("key2","Pakistan");
myMap.set("key3","Kashmir");
myMap.set("key4","Canada");
myMap.set("key5","England");
myMap.set("key6","Nedarland");

// for(let myvalue of myMap.values()){
//     console.log(myvalue);
// }
// for(let mykey of myMap.keys()){
//     console.log(mykey);
// }

// for(let myvalue of myMap.values()){
//     console.log(myvalue);
// }
for(let mykeys of myMap.keys()){
    console.log(mykeys);
}