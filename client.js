
$(document).ready(function(){
  $('#submitNewEmployee').on('click', function(){  //event listener on click of sumbitNewEmployee button
    // declaring variables and retrieving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();  // //next step put into table
    // adds new employee row to DOM
    $('#employeeTableBody').append(
    '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
    '</tr>'
  );
  });
});
