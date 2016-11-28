var employee = [];
var totalSalary= [];

var addEmployee = function( firstName, lastName, idNumber, jobTitle, annualSallary){

  var newEmployee = {
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    jobTitle: jobTitle,
    annualSallary: annualSallary
  };

  employee.push( newEmployee);
};

var getEmployee = function(){
  // retrieving all the employee info
  var nameOne = document.getElementById( 'First Name' ).value;
      console.log( 'First Name:', nameOne );
  var nameTwo = document.getElementById( 'Last Name' ).value;
      console.log( 'Last Name:', nameTwo );
  var number = document.getElementById( 'ID Number' ).value;
      console.log( 'ID Number:', number );
  var title = document.getElementById( 'Job Title' ).value;
      console.log( 'Job Title:', title );
  var salary = document.getElementById( 'Annual Salary' ).value;
      console.log( 'Annual Salary:', salary);
  // collecting all the employee info
  var infoArray = [nameOne, nameTwo, number, title, salary];
  totalSalary.push(infoArray);
  // Reseting my input boxes
  document.getElementById( 'First Name' ).value = "";
  document.getElementById( 'Last Name' ).value = "";
  document.getElementById( 'ID Number' ).value = "";
  document.getElementById( 'Job Title' ).value = "";
  document.getElementById( 'Annual Salary' ).value = "";
  // sending to the addEmployee function 
  addEmployee( nameOne, nameTwo, number, title, salary);
  // recording on the DOM
  document.getElementById( 'name one' ).innerHTML = ('First Name: ' + nameOne) ;
  document.getElementById( 'name two' ).innerHTML = ('Last Name: ' + nameTwo) ;
  document.getElementById( 'number' ).innerHTML = ('ID Number: ' + number);
  document.getElementById( 'title' ).innerHTML = ('Job Title: ' + title) ;
  document.getElementById( 'salary' ).innerHTML = ('Annual Salary: ' + salary);
  document.getElementById( 'total salary' ).innerHTML = ('Total Month Salary: ' + salaryByMonth()) ;
};
// calculating the monthly salary as a new employee is entered
var salaryByMonth = function () {
  var startingSalary = 0;
  for (var i = 0; i < totalSalary.length; i++) {
    startingSalary += Number(totalSalary[i][4]);
  }
  return startingSalary / 12;
};
