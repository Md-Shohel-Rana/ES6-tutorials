// Class Inheritance 1...Parent Class 2... Child Class


// Class Inheritance meaning- ottoradikar
// 1... parent Class 1.. Child Class..

// class parent{

//  hello1() {
//        console.log('hello 1 function'); 
//     }
//      hello2() {
//         console.log('hello 2 function');
//     }
// }


// class child extends parent{



// }

// var obj= new parent();
// obj.hello1();
// obj.hello2();

// 38 tutorials inheritance
class parent{

    hello1() {
          console.log('hello 1 function'); 
       }
        hello2() {
           console.log('hello 2 function');
       }
   }
   
   
   class child extends parent{
   
    hello1() {
        console.log('hello 1 function hello 1 function hello 1 function'); 
     }
   
   
   }
   
   var obj= new child();
   obj.hello1();
   obj.hello2();