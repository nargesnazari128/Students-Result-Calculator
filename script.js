// Students' Information //

let studentName = "Hussain";
console.log(studentName);
console.log(typeof studentName);

const studentAge = 22;
console.log(studentAge);
console.log(typeof studentAge);

let mathematicsMarks = 90;
console.log(mathematicsMarks);
console.log(typeof mathematicsMarks);

let englishMarks = 100;
console.log(englishMarks);
console.log(typeof englishMarks);

let computerMarks = 95.5;
console.log(computerMarks);
console.log(typeof computerMarks);


// Arithmetic Operations //

let engMark = 90;
let mathMarks = 95;
result = engMark + mathMarks;
console.log(result);

let assignment = 20;
let activity = 20;
let projects = 40;
let attendance = 10;
let midterm = 20;
let final = 60
totalNumber = assignment + activity + projects + attendance + midterm + final;
console.log(totalNumber);

average = totalNumber - 10 * 100 / 180 + "%";
console.log(average);


// Comperison Operators //

if (studentAge > 18) {
    console.log("Welcome to your Page!");
} 
else {
    console.log("You do not have a valid accound in this website.");   
}


if (mathematicsMarks >= 80) {
    console.log("A+", mathematicsMarks);
}
else {
    console.log("You should take this course Again!");
}


if (englishMarks == 100) {
    console.log("Awesome! YOur score is Excellent.")
}
else if( englishMarks >= 90 && englishMarks <=85){
    console.log("You are passed!");
}
else if( englishMarks >= 0 && englishMarks < 85) {
    console.log("Your are failed!");
}
else {
    console.log("Please Enter a Valid Number!");
}

//studentAge > 18;
//mathematicsMarks >= 80;
//englishMarks == 100;
//computerMarks > 50;
//average > 50;//

// Condational Statements //

const score = 95.5;

if (score >= 90 && score <= 100){
    console.log("Grade: A", score);
}
else if (score >= 80 && score <= 89){
    console.log("Grade: B", score);
}
else if (score >= 70 && score <= 79){
    console.log("Grade: C", score);
}
else if (score >= 60 && score <= 69){
    console.log("Grade: D", score);
}
else if (score >= 50 && score <= 59){
    console.log("Grade: E");
}
else if (score > 0 && score < 50){
    console.log("You failed!")
}
else{
    console.log("Please Enter a valid number.")
}


