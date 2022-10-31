// super Keyword..
// super.function name();

class parent{

    hello1(){
        console.log('Alhamdulillah, I am mern fullstack developer');
    }
    
    hello2(){
        console.log('Alhamdulillah, I am mern fullstack developer');
    }
}

class child extends parent{

  demo(){

    super.hello1();
    super.hello2();

  }

}
var obj= new child();
obj.demo();