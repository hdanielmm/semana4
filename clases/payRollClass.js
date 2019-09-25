class Employee {
  constructor(name, salary) {
    this.name = name
    this.baseSalary = salary
  }
  
  getDeductionHealth() {
    return this.baseSalary * 0.04
  }

  getDeductionRetirement() {
    return this.baseSalary * 0.08
  }
  
  getSalary() {
    const deductionHealth = getDeductionHealth();
    const deductionRetirement = getDeductionRetirement();
    return this.baseSalary - deductionHealth - deductionRetirement
  }

}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary)
    this.bonus = bonus
  }

  getSalary() {
    return super.getSalary() + this.bonus
  }
}

class Company {
  constructor() {
    this.employees = []
    this.healthFund = 0
    this.retirementFund = 0
  }

  addEmployees(...empls) {
    this.employees = empls;
  }

  generatePayroll() {
    let payroll = 0
    for (let i = 0; i < this.employees.length; i++) {
      const employee = this.employees[i];
      payroll += employee.getSalary();
      this.healthFund += employee.getDeductionHealth();
      this.retirementFund += employee.getDeductionRetirement();
    }
    return payroll
  }
}


const e1 = new Employee('Pedro', 2300)
const e2 = new Employee('Pablo', 3500)
const m1 = new Manager('Maria', 5000, 2500)

e1.getSalary()
e2.getSalary()
// m1.getSalaryManager()

const company = new Company();
company.addEmployees(e1, e2, m1);
company.generatePayroll(); // 2024 + 3080 + 6900 = 12004

/******************************************************************************************/
// Propio
/*
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
    this.deductionHealth = 0
    this.deductionRetirement = 0
  }
  getSalary() {
    this.deductionHealth = this.salary * 0.04
    this.deductionRetirement = this.salary * 0.08
    this.salary = this.salary - this.deductionHealth - this.deductionRetirement
    return this.salary
  }
}
class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary)
    this.bonus = bonus
  }
  getSalaryManager() {
    this.salary = this.getSalary() + this.bonus
    return this.salary
  }
}

class Company {
  constructor() {
    this.p = []
    this.totalHealthFund = 0
    this.totalRetirementFund = 0
  }
  addEmployees(...empl) {
    for (let i = 0; i < empl.length; i++) {
      this.p[i] = empl[i]
    }
  }
  generatePayroll() {
    this.payroll = 0
    for (let i in this.p) {
      this.payroll += this.p[i].salary
    }
    return this.payroll
  }
  healthFund() {
    for (let i in this.p) {
      this.totalHealthFund += this.p[i].deductionHealth
    }
    return this.totalHealthFund
  }
  retirementFund() {
    for (let i in this.p) {
      this.totalRetirementFund += this.p[i].deductionRetirement
    }
    return this.totalRetirementFund
  }
}

const e1 = new Employee('Pedro', 2300)
const e2 = new Employee('Pablo', 3500)
const m1 = new Manager('Maria', 5000, 2500)

e1.getSalary()
e2.getSalary()
m1.getSalaryManager()

const company = new Company()
company.addEmployees(e1, e2, m1)
console.log(company.generatePayroll())
console.log(company.healthFund())
console.log(company.retirementFund())
console.log(company.generatePayroll())
console.log(company.healthFund())
console.log(company.retirementFund())*/