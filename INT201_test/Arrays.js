let arr1 = [10, 'in progress', true, 1];
console.log(arr1[0]); // [integer expression]
console.log(arr1.length);
console.log(arr1 [    arr1[ arr1.length-1 ]   ]  );

let arr = [1,2,3,4];
let arr2 = arr;
arr2[1] = 999;
console.log(arr); //[ 1, 999, 3, 4 ]

function doSomething(temp){ //temp=arr
    for(let i=0; i< temp.length; i++){
        temp[i] = temp[i] * 2; //[1*2, 999*2, 3*2, 4*2]
    }
}

doSomething(arr);
console.log(arr); //[ 2, 1998, 6, 8 ]


let student = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Mary'}
]
console.log(student[0]);
student[student.length-1].name = 'Wichanart'; //ระบุเข้าไป
console.log(student[student.length-1]);

let colors = [
    [`pink`, `red`],
    [`yellow`, `orange`, `brown`]
];
console.log(colors[1][colors[1].length-1]) //find the last value for 2 มิติ
console.log(colors[0][colors[0].length - 1]);
console.log(colors[colors.length - 1][colors[1].length - 1]);
