let num=0
function plus() {
   num++
   document.getElementById('one').innerHTML=num 
}
function minus() {
    --num
    document.getElementById('one').innerHTML=num 
 }
 function res() {
    num=0
    document.getElementById('one').innerHTML=num 
 }

 function work(soldier, Driver) {
    if (soldier.grade>Driver.grade) {
        console.log(soldier); 
    }
    else{
        console.log(Driver);
    }
 }
 let soldier={
    Fullnames:"Moses Kamau Maina",
    age: 58,
    gender:"Male",
    dob:"1965/5/5",
    grade:"c+",
    workexperience:"20yrs"
 }
 let Driver={
    Fullnames:"Jane Njoki Mwangi",
    age: 50,
    gender:"Female",
    dob:"1973/3/3",
    grade:"B",
    workexperience:"30yrs"
 }
 work(soldier, Driver)