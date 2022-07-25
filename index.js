// Write your solution in this file!
const employee = {
    name : "Marley",
    streetAddress : "61 Lispendard"
}; 

function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
       ...employee,
       [key] : value
   };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee
    };
    delete newEmployee.name;
    //employee.name;
    console.log(employee.name);
    console.log(newEmployee.name);
    return newEmployee;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    const newEmployee = {...employee};
    console.log(employee);
    console.log(newEmployee);
    return employee;
    return newEmployee;
}