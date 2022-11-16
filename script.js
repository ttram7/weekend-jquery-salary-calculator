let employees = [];

$(document).ready(readyNow);

function readyNow() {
    $('#submit-btn').on('click',addEmployee);
}

function addEmployee() {
    console.log('in addNewEmployee')
    let newEmployee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        id: $('#employee-id').val(),
        title: $('#employee-title').val(),
        annualSalary: $('#annual-salary').val(),
    }

    employees.push(newEmployee);

    $('#first-name').val(''),
    $('#last-name').val(''),
    $('#employee-id').val(''),
    $('#employee-title').val(''),
    $('#annual-salary').val('')
    console.log(employees)
    render();
}

function render() {
    console.log('in add render')
    let el = $('#employee-list')
    el.empty();
    for (employee of employees) {
        el.append(`${employee.firstName} ${employee.lastName} ${employee.id} ${employee.title} ${employee.annualSalary} <br>`);
        
    }

    
}