//1
let num1=10;
let num2=20;
num2=num1; //assign to value num1(10) to num2 
num2=55;
console.log(num1); //10
console.log(num2); //55

//2
let std1={id: 1, name: "Susan"}
let std2={id: 2, name: "John"}
std2=std1; //points to same memory address
std2.name="Peter"
console.log(std1) //Peter
console.log(std2) //Peter

console.log(num1===num2) // primitive values are compared
console.log(std1===std2) // memory address are compared

//3
function doSomething1(student){ //student is a formal parameter
    student.id = 63130500145;
}
let std3 = {id: 3, name: 'Joe'};
doSomething1(std3); //std3 is an actual parameter
console.log(std3);

//4
function doSomething2(num){ //num=num3 
    num=555;
    //console.log(num); //555
}

let num3 = 1; 
doSomething2(num3); //std3 is an actual parameter
console.log(num3);
console.log("type of num3 is"+" "+ typeof num3, "and type of std3 is"+" "+ typeof std3)