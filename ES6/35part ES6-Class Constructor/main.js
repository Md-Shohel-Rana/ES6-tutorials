
// kivabe class ar vitor parameter pass kora jai

class MyClass{
    constructor(a,b) {
       this.firstNum=a
       this.secondNum=b
    }

    add() {
       let result= this.firstNum + this.secondNum
       console.log(result);
    }
}

// new MyClass(10,20);
var obj= new MyClass(10,20);

obj.add();