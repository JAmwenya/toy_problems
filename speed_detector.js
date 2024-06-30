function speedDetector() {
    // Ask user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");
    let demeritPoints = 0;
    let limit = 70;

    // Check if the user has entered a value
    if (speed !== null && speed !== "") {
        // Convert the speed to an integer
        speed = parseInt(speed, 10);

        // Validate if input is a number
        if (!isNaN(speed)) {
            // Check if the speed is less than the limit
            if (speed <= limit) {
                alert("Ok");
            } else {
                // Calculate the demerit points
                demeritPoints = Math.floor((speed - limit) / 5);
                if (demeritPoints > 12) {
                    alert(`Points: ${demeritPoints}. License suspended.`);
                } else {
                    alert(`Points: ${demeritPoints}`);
                }
            }
        } else {
            alert("Invalid input. Please enter a numeric value.");
        }
    } else {
        alert("No input provided.");
    }
}

speedDetector();
