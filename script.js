$(function() {
    var employeeArray = [];

    var renderName = function(employeeObj) {
        $('ul').append('<li>' + employeeObj.firstname + ', ' + employeeObj.lastname + ', ' + employeeObj.employeeNum + ', ' + employeeObj.title + ', ' + employeeObj.reviewScore + ', ' + employeeObj.salary + '</li>');
       
    };

    $('form').on('submit', function(event) {
        event.preventDefault();

        var employeeObj = {};

        var field_firstName = $('#firstName').val();
        var field_lastName = $('#lastName').val();
        var field_employeeNum = $('#employeeNum').val();
        var field_title = $('#title').val();
        var field_reviewScore = $('#reviewScore').val();
        var field_salary = $('#salary').val();

        employeeObj.firstname = field_firstName;
        employeeObj.lastname = field_lastName;
        employeeObj.employeeNum = field_employeeNum;
        employeeObj.title = field_title;
        employeeObj.reviewScore = field_reviewScore;
        employeeObj.salary = field_salary;

        employeeArray.push(employeeObj);

        renderName(employeeObj);
    });
});



// function employees (firstName, lastName, empNum, title, lastScore, salary) {

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.empNum = empNum;
//     this.title = title;
//     this.lastScore = lastScore;
//     this.salary = salary;
// };

// var employeeArray = []


// ($function() {


// $('form').on('submit', function(event) {
//   event.preventDefault();
//   var employee = $(this).serializeArray();
//   var newEmployee = new Employee(employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value);
//   createemployee(newEmployee);
//   console.log(newEmployee);

// });
// });



// function creationEmp(employees) {

//     var $ul = $('<ul>');
//     $ul.append($('<li>').text('First Name:' + employee.firstName));
//     $ul.append($('<li>').text('Last Name:' + employee.lastName));
//     $ul.append($('<li>').text('Employee Number:' + employee.empNum));
//     $ul.append($('<li>').text('Title:' + employee.title));
//     $ul.append($('<li>').text('Last Score:' + employee.lastScore));
//     $ul.append($('<li>').text('Salary:' + employee.salary));


// };
