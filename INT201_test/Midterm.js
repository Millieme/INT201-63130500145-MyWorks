//63130500145 วิชานาถ แซ่โค้ว

//2.1
let student1 = {
    stdID : 63130500145,
    stdName : "วิชานาถ แซ่โค้ว",
    Semester : "1/2563"
} //ประกาซตัวแปร student1 เป็น object สำหรับเห็บข้อมูล รหัศนศ,ชื่อ-นามสกุล ปีการศึกษา เทอม
console.log(student1);
let enroll = {
    courseID : ["GEN101","GEN121","INT100","INT101","INT102","INT114","LNG202"],
    credit : [1,3,3,3,1,3,3],    
    sumCredit : doSomething(credit)
}
console.log(enroll)

//2.2
let credit1 = [1,3,3,3,1,3,3]; //เก็บค่าหน่วยกิตเทอมที่ 1
let credit2 = [3,3,3,1,3,1,3]; //เก็บค่าหน่วยกิตเทอมที่ 2
console.log(credit1)
console.log(credit2)

function doSomething(sum){ 
    for(let i=0; i< sum.length; i++){
        sum = sum[i]+sum; 
        return sum;
    }
}
doSomething(credit1);
console.log(credit1);
