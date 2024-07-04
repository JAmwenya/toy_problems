function calculateGrade() {
    //ask user to enter the students' marks
    let marks = prompt("Enter student marks (0-100):");
    let grade;

    //checks if an input is provided
    if (marks !== null && marks !== "") {
    //convert the input to integer
        marks = parseInt(marks, 10);

        if (marks > 79 && marks <= 100) {
            grade = 'A';
        } else if (marks<= 78 && marks >= 60) {
            grade = 'B';
        } else if (marks <= 59 && marks >= 50) {
            grade = 'C';
        } else if (marks <=49 && marks >= 40) {
            grade = 'D';
        } else if (marks <= 39 && marks >= 0){
            grade = 'E';
        } else if (marks < 0 || marks > 100){
            grade = 'Invalid input';
        }

    //display the grade
        alert(`Student grade is: ${grade}`);
    } else {
    //display message if no input provided
        alert("No input provided.");
    }
}

calculateGrade();
