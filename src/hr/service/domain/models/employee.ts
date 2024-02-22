import { ChangeSalaryCmd } from "../changeSalary.cmd";
import { SalaryChangedEvent } from "../salaryChanged.event";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  salary: number;
  events: Array<object>;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    position: string,
    salary: number,
    event: object
  ) {
    this.id = id;
    this.firstName = firstName;
    (this.lastName = lastName), (this.age = age);
    this.position = position;
    this.salary = salary;
    this.events = [event];
  }

  changeSalary(salary: number) {
    if (this.salary === salary) {
      throw new Error("input salary is the same");
    }
    this.salary = salary;
  }
  apply(cmd: ChangeSalaryCmd) {
    if (this.salary === cmd.salary) {
      throw new Error("input salary is the same");
    }
    const salaryChange: SalaryChangedEvent = {
      newSalary: cmd.salary,
      previousSalary: this.salary,
      updateAt: new Date(),
    };
    return new Employee(
      this.id,
      this.firstName,
      this.lastName,
      this.age,
      this.position,
      this.salary,
      salaryChange
    );
  }
}
