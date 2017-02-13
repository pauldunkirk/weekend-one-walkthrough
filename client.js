
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
      '<td><button class="deleteEmployeeButton" data-salary=" ' + annualSalary + '  ">Delete ' + firstName +'</button></td>' +
    '</tr>'
  );
    // add monthly Salary expense to the document
    var newEmployeeMonthlyExpenses = annualSalary/12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text(); //open par means get
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses); //not open par means change

    //clear out input boxes
    $('.employeeFormInput').val('');
  });
  $('#employeeTableBody').on('click' , '.deleteEmployeeButton', function(){
      console.log('delete button was clicked');
      // removing employee sal from total
      //var deletedEmployeeSalary = $(this).parent().prev().text();// bring in string of employee salary that was deleted
      var deletedEmployeeSalary = $(this).data('salary'); //see line 18
      var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary/12;
      var previousMonthlyExpenses = $('#monthlyExpenses').text(); //current value of what expenses were
      var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
      $('#monthlyExpenses').text(newTotalMonthlyExpenses);

      // deletes empployee row from table
      $(this).parent().parent().remove();  // this button, parent td, parent?
      // or $(this).closest('tr').remove();

  });
});
