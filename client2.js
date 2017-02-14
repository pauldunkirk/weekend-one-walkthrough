
$(document).ready(function(){
  $('form').on('submit', function(event){  //
    event.preventDefault(); // do not bring us to a new page - over-riding default event behavior

    // serializeArray creates an array of the inputs - inputs converted to objects
    // these objexts have two proerties: name and value -- name is not person's name, but name on input, value is value entered
    // e.g. {name: 'firstName', value: 'Luke'}
    console.log('form values ', $(this).serializeArray());

    var submissionArray = $(this).serializeArray(); // not userful [{}, {}, {}]
    var newEmployeeObject = {}; // we want {firstName: 'Luke', lastName: 'Schlangen'}

    submissionArray.forEach(function(inputField){
      // first time newEmployeeObject is {} empty object
      newEmployeeObject[inputField.name] = inputField.value;
      // same as newEmployeeObject.firstname = Luke --this is in dot notation - but use bracket because it's not going to be firstname each time
      // newEmployeeObject is {firstname: 'Luke'}
      // 2nd time through newEmployeeObject is {firstName: 'Luke', lastName: 'Schlangen'}
    });

    console.log(newEmployeeObject);

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
      '<td>' + jobTitle + '</td>' + //deleteEmployeeButton
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
