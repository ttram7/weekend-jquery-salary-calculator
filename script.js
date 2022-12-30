let employees = [];
let totalMonthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#submit-btn').on('click',addEmployee);
    $('#product-table').on('click','#remove-btn',removeEmployee);
}

//takes input values and stores as newEmployee properties
//object added to employees array
function addEmployee() {
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
    calculateMonthlyCost();
    render();
}

//appends properties to table for each object in array
function render() {
    let el = $('#product-table')
    el.empty();
    for (employee of employees) {
        el.append(`
        <tr>
            <td>${employee.firstName}</td> 
            <td>${employee.lastName} </td>
            <td>${employee.id}</td> 
            <td>${employee.title}</td> 
            <td>$${employee.annualSalary}</td>
            <td><button id="remove-btn" data-salary="${employee.annualSalary}">Remove</button></td>
        </tr>`);
    }    
}

//removes employee from table
//removed employee's monthly salary is subtracted from totalMonthlyCost
function removeEmployee() {
    let rowNum = this.parentNode.parentNode.rowIndex;
    $(this).parent().parent().remove();
    employees.splice(rowNum - 1, 1);
    calculateMonthlyCost();

}

//adds each employee's monthly salary and total is outputted to DOM
function calculateMonthlyCost() {
    totalMonthlyCost = 0;
    for (employee of employees) {
        totalMonthlyCost += Math.round((Number(employee.annualSalary) / 12));
    }
    $('#monthlyCost').text(totalMonthlyCost.toFixed(2));
    changeColor();
}

//changes background color to red if totalMonthCost exceeds $20,000
//removes css class if it does not exceed $20,000
function changeColor() {
    if (totalMonthlyCost > 20000) {
        $('#totalMonthlyOut').addClass('prime-red');
    }
    else {
        $('#totalMonthlyOut').removeClass('prime-red'); 
    }
}