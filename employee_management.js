


 // Create departments

 const engineering = new Department("Engineering");

 const marketing = new Department("Marketing");

 

 // Create employees

 const alice = new Employee("Alice", 80000, "Developer", "Engineering");

 const bob = new Employee("Bob", 75000, "Designer", "Marketing");

 const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);

 const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);

 

 // Add employees to departments

 engineering.addEmployee(alice);

 engineering.addEmployee(charlie);

 marketing.addEmployee(bob);

 marketing.addEmployee(diana);

 

 // Calculate total salary for each department

 console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);

 console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);

 console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);

 console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);






//task 1
class Employee (name, salary, position, department) {
    getDetails(
        name= Fatima,
        salary= 80000,
        position= Developer,
        department= Engineering,
    )
};

//task 2
 class department {
    name:name
    employees: []
    function getDepartmentSalary(employees) {
        let departmentsalary = employees.salary;

        for (let employess of employees.salary) {
            totalsalary += getDepartmentSalary(employees);

            return departmentsalary;


            getDetails(){
                return 'Name: ${name}, Position: ${position}, Salary: ${salary}'
            }
        }
    }

    
 }

 //task 3
class manager extends employee {
    manager(name, salary, position, department, bonus) {
    employee(name, salary, position, department)
    }
    getDetails(){
        return 'Name: ${name}, Position: ${position}, Salary: ${salary}, Bonus: ${bonus}'
    }
}


    


