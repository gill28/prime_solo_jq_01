function employeeObj(firstName, lastName, employeeNum, title, reviewScore, salary) {
  $('ul').append('<li>' + employeeObj.firstname + ', ' + employeeObj.lastname + ', ' + employeeObj.employeeNum + ', ' + employeeObj.title + ', ' + employeeObj.reviewScore + ', ' + employeeObj.salary + '</li>');
};

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

var employeeTemplate = $('#entry-template').html();

// Compile the template
var theTemplate = Handlebars.compile(employeeTemplate);

$('form').on('submit', function(event) {
  event.preventDefault();

  var compiledHtml = theTemplate({employees: employeeObj()});



  // employeeArray.push(employeeObj);
  //
  // renderName(employeeObj)
});
