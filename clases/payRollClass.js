// PayRoll Calculator

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.baseSalary = salary;
  }

  getDeductionHealth() {
    return this.baseSalary * 0.04;
  }

  getDeductionRetirement() {
    return this.baseSalary * 0.08;
  }

  getSalary() {
    const deductionHealth = this.baseSalary * 0.04; // si uso la función getDeductionHealth() sale error diciendo que no está declarada
    const deductionRetirement = this.baseSalary * 0.08; // el mismo problema de la línea anterior
    return this.baseSalary - deductionHealth - deductionRetirement;
  }

}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  getSalary() {
    return super.getSalary() + this.bonus;
  }
}

class Company {
  constructor() {
    this.employees = [];
    this.healthFund = 0;
    this.retirementFund = 0;
  }

  addEmployees(...empls) {
    this.employees = empls;
  }

  generatePayroll() {
    let payroll = 0;
    for (let i = 0; i < this.employees.length; i++) {
      const employee = this.employees[i];
      payroll += employee.getSalary();
      this.healthFund += employee.getDeductionHealth();
      this.retirementFund += employee.getDeductionRetirement();
    }
    return payroll;
  }
}

const e1 = new Employee('Pedro', 2300);
const e2 = new Employee('Pablo', 3500);
const m1 = new Manager('Maria', 5000, 2500);

e1.getSalary();
e2.getSalary();
m1.getSalary();

const company = new Company();
company.addEmployees(e1, e2, m1);
console.log(company.generatePayroll()); // 2024 + 3080 + 6900 = 12004


console.log(company.healthFund); // 432
console.log(company.retirementFund); // 864

console.log(company.generatePayroll()); // 12004
console.log(company.healthFund); //864
console.log(company.retirementFund); // 1728

