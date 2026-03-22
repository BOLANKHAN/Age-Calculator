let dob = document.getElementById("birthDate");
let currentDate = document.getElementById("currentDate");
let output = document.getElementById("output");

document.getElementById("calculateBtn").addEventListener("click",()=>{
    if(dob.value=="" || currentDate.value==""){
        output.innerHTML = "Please Select Date";
    }
    else{
        calculateAgeDifference(dob.value,currentDate.value);
    }
});
function calculateAgeDifference(start, end){
    //console.log(start);
    let dobYear = parseInt(start.substring(0,4), 10);
    let dobMonth = parseInt(start.substring(5,7), 10);
    let dobDate = parseInt(start.substring(8,10), 10);
    let currMonth = parseInt(start.substring(0,4), 10);
    let currYear = parseInt(start.substring(5,7), 10);
    let currDate = parseInt(start.substring(8,10), 10);
//Year Difference
let yearAgeDiff = currYear - dobYear


//Month Difference
let monthAgeDiff;
if(currMonth>= dobMonth){
    monthAgeDiff = currMonth - dobMonth;

}
else{
    yearAgeDiff--;
    monthAgeDiff = 12 + currMonth - dobMonth;
}
///Day differnce 
let dateAgeDiff;
if(currDate>=dobDate){
    dateAgeDiff = currDate - dobDate;
}
else{
    monthAgeDiff--;
    noOfDaysInDOB = noOfDaysInDob + currDate - dobDate;
    dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

//Case when MonthAgeDiff goes negative
if(monthAgeDiff<0){
    monthAgeDiff=11;
    yearAgeDiff--;
   }
 }
 output.innerHTML = yearAgeDiff + "Years," + monthAgeDiff + "Months," + dateAgeDiff + "Days.";
 }
 function daysInMonth(month, year){
    return new Date(year, month, 0).getDate();
 }