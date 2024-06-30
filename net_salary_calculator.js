function netSalaryCalculator() {
//ask user to enter salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary"));
    const benefits = parseFloat(prompt("Enter benefits"));

//declare variables to store payee, nhif and nssf
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);

    //calculate gross salary and net salary
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhif - nssf;

    //display the results
    alert(`Payee: ${payee}, NHIF: ${nhif}, NSSF: ${nssf}, Gross Salary: ${grossSalary}, Net Salary: ${netSalary}`);

    return {
        payee,
        nhif,
        nssf,
        grossSalary,
        netSalary
    };
}

//calculate payee, nhif and nssf
function calculatePayee(basicSalary) {
    return basicSalary * 0.1;
}

function calculateNHIF(basicSalary) {
    return basicSalary * 0.05;
}

function calculateNSSF(basicSalary) {
    return basicSalary * 0.05;
}

netSalaryCalculator();
