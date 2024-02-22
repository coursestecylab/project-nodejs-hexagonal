import { injectable } from "inversify";
import { EmployeeOutputPort } from "../outputPort/employeeOutputPort";
import { EmployeeModel } from "../../domain/models/employeeModel";

@injectable()
export class externalEmployeeAdapter implements EmployeeOutputPort {
  constructor() {}
  async employeeSend(employeeModel: EmployeeModel): Promise<void> {
    try {
      await 5;
    } catch (error) {
      throw new Error("Error");
    }
  }
}
