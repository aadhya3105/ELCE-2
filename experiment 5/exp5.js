let employees = [];


function addEmployee(){

    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if(name === "" || empId === "" || isNaN(salary) || dept === ""){
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}



function displayEmployees(){

    let output = document.getElementById("output");

    if(employees.length === 0){
        output.innerHTML = "No employees added yet.";
        return;
    }

    let text = "";

    employees.forEach(emp => {
        text +=
        "Name: " + emp.name + "<br>" +
        "ID: " + emp.id + "<br>" +
        "Salary: " + emp.salary + "<br>" +
        "Department: " + emp.department + "<br><br>";
    });

    output.innerHTML = text;
}



function filterSalary(){

    let output = document.getElementById("output");

    let filtered = employees.filter(emp => emp.salary > 50000);

    if(filtered.length === 0){
        output.innerHTML = "No employees with salary greater than 50000.";
        return;
    }

    let text = "";

    filtered.forEach(emp => {
        text += emp.name + " - " + emp.salary + "<br>";
    });

    output.innerHTML = text;
}



function totalSalary(){

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    document.getElementById("output").innerHTML =
    "Total Salary of all employees: " + total;
}



function averageSalary(){

    if(employees.length === 0){
        document.getElementById("output").innerHTML = "No employees added.";
        return;
    }

    let total = 0;

    employees.forEach(emp => {
        total += emp.salary;
    });

    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
    "Average Salary: " + avg.toFixed(2);
}



function countDepartment(){

    let deptCount = {};

    employees.forEach(emp => {
        if(deptCount[emp.department]){
            deptCount[emp.department]++;
        } else{
            deptCount[emp.department] = 1;
        }
    });

    let text = "";

    for(let dept in deptCount){
        text += dept + ": " + deptCount[dept] + "<br>";
    }

    document.getElementById("output").innerHTML = text;
}