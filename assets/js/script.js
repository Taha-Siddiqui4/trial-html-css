// data types
// int
// float
// double
// string
// bool

// varible type
// var
// let
// const

// let a = "Umair";
// console.log(a);
// a = "Ali";

// console.log(a);

let uname = prompt("Enter username: ");
let upass = prompt("Enter password: ");

let percentage = parseFloat(prompt("Enter your percentage:"));

if (percentage >= 80) {
    alert("Your Grade: A+");
}
else if(percentage >= 70){
    alert("Your Grade: A");
}
else if(percentage >= 60){
    alert("Your Grade: B");
}
else if(percentage >= 50){
    alert("Your Grade: C");
}
else if(percentage >= 40){
    alert("Your Grade: D");
}
else{
    alert("Fail.");
}