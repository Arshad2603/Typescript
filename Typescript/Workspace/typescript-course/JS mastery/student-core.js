const students = [];

function addStudent(name, score){
    score = Number(score);
    score = score ?? 0; //If score is null we will give value zero
    name = name.trim().toUpperCase();
    students.push({name, score})
}

//Get Grades
function getGrades(){
    
}