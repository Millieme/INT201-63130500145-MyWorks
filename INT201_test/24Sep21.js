
//array destructuring assignment + rest parameter
[subject, students, ...listOfStudents] = ['INT201', 50, 'A', 'B', 'C'];
console.log(subject);
console.log(students);
console.log(listOfStudents);


//object destructuring assingment
({ productId, productName } = { productName: 'Coke', productId: 111 });
console.log(productId);
console.log(productName);

//object destructuring assignment +rest parameter
({ productId, productName, ...rest } = {
    productName: 'Coke',
    productId: 111,
    productPrice: 10,
    productStock: 5 
});

console.log(productId);
console.log(productName);
console.log(rest);
rest.productPrice = 200;
console.log(rest);

//function declaration
function sum(numbers) {
    let total = 0; //local variable 
    for (let num of numbers) total += num;  
    return total;  
  }  
  console.log(sum([1, 2, 3]));

//calling function, function execution
  sum([1, 2, 5, 10]);

//function expression
const myFunc = function (numbers) {
    let total = 0; //local variable  
    for (let num of numbers) total += num;  
    return total;  
};
  
//calling function, function execution  
 console.log(myFunc([1, 2, 3]));

//function expression +destructuring assignment
const myFunc = function ([num1, num2], value) {
    console.log(num1); 
    console.log(num2); 
    console.log(value);  
  };
  
//calling function, function execution
  myFunc([10, 20], 5);

//function expression +destructuring assignment
const myFunc = function (num1, num2, num3) {
    console.log(num1);  
    console.log(num2);  
    console.log(num3);  
  };
  
//calling function, function execution with spread operator  
  myFunc(...[10, 20, 5]);

//1
function getCourse() {
    return 'INT201 Client Side Programming I';
}
  
//2.  
  function echo(text) { 
    return text;
}
  
//3.  
  function isKMUTTStudent(student) {  
    if (student.id.length == 13) return true;  
    else return false;
}
  
//4.
  function sum(num1, num2, num3) {
  
    return num1 + num2 + num3;
}
  
//5. 
  function greetingSomeOne(name) {  
    const greeting = ['hi', 'hello', 'hey'];  
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;  
}
let products=[{prodID}]