function calculateGrade() {
    //ask user to enter the students' marks
    let marks = prompt("Enter student marks (0-100):");
    let grade;

    //checks if an input is provided
    if (marks !== null) {
    //convert the input to integer
        marks = parseInt(marks, 10);
        
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

    //display the grade
        alert(`Student grade is: ${grade}`);
    } else {
    //display message if no input provided
        alert("No input provided.");
    }
}

calculateGrade();
