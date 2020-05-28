let departments = ['Sales', 'Technology', 'Marketing'];
let employeeNames = [['Jamie', 'Gabby', 'Will'], ['Arnell', 'Marge', 'Joe'], ['Bobby', 'Chelsea']];
let employeeSalary = [[70000, 72000, 71000], [100000, 75000, 77000], [77000, 76000]];
let employeeHireYear = [[2010, 2008, 2013], [1990, 2007, 2004], [2001, 2005]];

for (let i = 0; i < departments.length; i++) {
    for (let j = 0; j < employeeNames[i].length; j++) { //employee[i] equals nothing!
    console.log(` ${departments[i]} ${employeeNames[i][j]}: ${employeeHireYear[i][j]} and they earn ${employeeSalary[i][j]}!`);
    }
}
