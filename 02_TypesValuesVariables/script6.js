//let, const, var
//const can't be updated but let and var can be updated
//const and let can't be re-declared but var can re-declared :declare คือการประกาศค่า
//const like final static in java it's can't change value

/* var x //declare 
x=10; //defualt is var assign คือการกำหนดค่า */

//var have 2 scope are global and local

//var with global scope, under window object ex.window.std
var std = 10;
var std = `myStudent`; //re-declared std variable สร้างตัวแปรใหม่ใช้ชื่อเดิม กำหนดพื้นที่ในaddress memoryใหม่แล้วตั้งชื่อตัวแปร
//can re-assign use = 
//but update คือตัวแปรที่อ้างถึงaddress memไหน ก็อัปเดตที่เดิม เปลี่ยน value
//พยายามใช้ let, comsole
//string can use  '' single quote " " double quote and `` backtick 

function doSomething() {
    //var with local scope can use only in {}
    var msg = `INT201-JS`;
    console.log(msg);


}
//console.log(msg); :Error: msg is not defined
console.log(std); //myStudent
console.log(doSomething);