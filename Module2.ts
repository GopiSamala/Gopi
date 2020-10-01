import {Employee1} from './Employee';
class Use extends Employee1{
    m1(){
        var emp= new Employee1();
        console.log(emp.ename);
       var use= new Use();
       console.log(use.eaddress);
      
    }
}

var u= new Use();
u.m1();
