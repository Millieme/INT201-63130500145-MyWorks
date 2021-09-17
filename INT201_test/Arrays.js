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


let students = [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Mary'}
]
console.log(students[0]);
students[students.length-1].name = 'Wichanart'; //ระบุเข้าไป
console.log(students[students.length-1]);

let students2=[1, ...students, 100]; //... follow by array
console.log(students2.length); //5
console.log(students2); 
//  1,
//{ id: 1, name: 'Ann' },
//{ id: 2, name: 'Peter' },
//{ id: 3, name: 'Wichanart' },
//100
students2[1].name = 'XYZ'; //ชื่ออเรย์[ตำแหน่งที่1].ชื่อตัวแปร เปลี่ยนเป็น XYZ
console.log(students2[1]); 
console.log(students)
console.log(students2);


let colors = [
    [`pink`, `red`],
    [`yellow`, `orange`, `brown`]
];
console.log(colors[1][colors[1].length-1]) //find the last value for 2 มิติ
console.log(colors[0][colors[0].length - 1]);
console.log(colors[colors.length - 1][colors[1].length - 1]);

