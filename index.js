// Write your solution in this file!
const employee = {
    'name': 'Dennoh',
    'streetAddress': 'Dennisville,Njogu rd'
};
function updateEmployeeWithKeyAndValue(employee, key, val){
    return { ...employee, 
        [key]: val
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, val){
    employee[key] = val;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}