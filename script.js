var employee = [];
var totalSalary= [];

var addEmplopyee = function( firstName, lastName, idNumber, jobTitle, annualSallary){

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
  // get Employee Input
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
      totalSalary.push(salary);

  addEmployee( nameOne, nameTwo, number, title, salary);
  document.getElementById( 'name one' ).innerHTML = 'First Name: ' + nameOne ;
  document.getElementById( 'name two' ).innerHTML = 'Last Name: ' + nameTwo ;
  document.getElementById( 'number' ).innerHTML = 'ID Number: ' + number ;
  document.getElementById( 'title' ).innerHTML = 'Job Title: ' + title ;
  document.getElementById( 'salary' ).innerHTML = 'Annual Salary: ' + salary ;
  document.getElementById( 'total salary' ).innerHTML = 'Total Month Salary: ' + totalSalary ;
};
