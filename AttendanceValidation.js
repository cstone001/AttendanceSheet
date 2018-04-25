/*DATE VALIDATION(future dates only)*/
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("date")[0].setAttribute('min', today);


$(document).ready(function() {
    $('#form')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
              date: {
                  validators: {
                      notEmpty: {
                          message: 'The event date is required'
                      },
                      date: {
                          format: 'MM/DD/YYYY',
                          message: 'The value is not a valid date'
                      }
                  }
              },
              studentName: {
                  row: '.col-xs-4',
                  validators: {
                      notEmpty: {
                          message: "The student's name is required"
                      },
                      stringLength: {
                          min: 2,
                          max: 15,
                          message: "The student's name must be more than 1 and less than 16 characters long"
                      },
                      regexp: {
                          regexp: /^([a-zA-Z\s]{2,15})$/,
                          message: "The student's name can only consist of alphabetical characters"
                      }
                  }
              }

            }
        })
});
