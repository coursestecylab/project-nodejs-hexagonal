import { EmployeeModel } from "../../domain/models/employeeModel";

export interface EmployeeOutputPort {
  employeeSend(employeeModel: EmployeeModel): Promise<void>;
}
