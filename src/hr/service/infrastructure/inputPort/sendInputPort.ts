import { EmployeeModel } from "../../domain/models/employeeModel";

export interface sendInputPort {
  sendEmployee(employeeModel: EmployeeModel): Promise<void>;
}
