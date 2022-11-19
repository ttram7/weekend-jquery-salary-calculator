let employees = [];
let totalMonthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
    $('#submit-btn').on('click',addEmployee);
    $('#product-table').on('click','#remove-btn',removeEmployee);
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
    calculateMonthlyCost();
    render();
}

function render() {
    console.log('in add render')
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
            <td><button id="remove-btn">Remove</button></td>
        </tr>`);
    }    
}

function removeEmployee() {
    $(this).parent().parent().remove();
    // totalMonthlyCost -= Math.round((Number(this.annualSalary) / 12));
    // console.log(totalMonthlyCost)

}

function calculateMonthlyCost() {
    totalMonthlyCost = 0;
    for (employee of employees) {
        totalMonthlyCost += Math.round((Number(employee.annualSalary) / 12));
    }
    $('#monthlyCost').text(totalMonthlyCost.toFixed(2));
    changeColor();
}

function changeColor() {
    if (totalMonthlyCost > 20000) {
        $('#totalMonthlyOut').addClass('prime-red');
    }
}