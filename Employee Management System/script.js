// Define Employee object template
function Employee(name, age, department, salary) {
  this.name = name;
  this.age = age;
  this.department = department;
  this.salary = salary;
}

// Sample employee data
const employees = [
  new Employee("John Doe", 30, "Sales", 50000),
  new Employee("Jane Smith", 35, "HR", 60000),
  new Employee("Alice Johnson", 25, "Sales", 55000),
  new Employee("Bob Brown", 40, "IT", 70000),
];

// Calculate Average Salary
function calculateAverageSalary() {
  const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
  const averageSalary = totalSalary / employees.length;
  displayOutput(
    `Average Salary: $${averageSalary.toFixed(2)}`,
    "Arial",
    "red",
    "bold"
  );
}

// Find Employees in a Department
function findEmployeesInDepartment(department) {
  const deptEmployees = employees.filter(
    (emp) => emp.department === department
  );
  displayOutput(
    `Employees in ${department}: ${deptEmployees
      .map((emp) => emp.name)
      .join(", ")}`,
    "Arial",
    "red",
    "bold"
  );
}

// Increase Salary for Employees
function increaseSalary(percentage) {
  employees.forEach((emp) => {
    emp.salary *= 1 + percentage / 100;
  });
  displayOutput(
    `Salaries increased by ${percentage}%.`,
    "Arial",
    "red",
    "bold"
  );
}

// Sort Employees by Age
function sortEmployeesByAge() {
  const sortedEmployees = employees.slice().sort((a, b) => a.age - b.age);
  displayOutput(
    `Sorted Employees by Age: ${sortedEmployees
      .map((emp) => emp.name)
      .join(", ")}`,
    "Arial",
    "red",
    "bold"
  );
}

// Display all Employees
function displayAllEmployees() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear Previous Output
  employees.forEach((emp) => {
    const employeeInfo = `
            <p>Name: ${emp.name}</p>
            <p>Age: ${emp.age}</p>
            <p>Department: ${emp.department}</p>
            <p>Salary: ${emp.salary}</p>
            <hr>
        `;
    outputDiv.innerHTML += employeeInfo;
    displayOutput(outputDiv.innerHTML, "Arial", "blue", "bold");
  });
}

// Display output in HTML
function displayOutput(message, fontFamily, color, fontWeight) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<p style="font-family: ${fontFamily}; color: ${color}; font-weight: ${fontWeight}">${message}</p>`;
}
