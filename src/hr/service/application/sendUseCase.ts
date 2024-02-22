import { injectable, inject } from "inversify";
import { TYPES } from "../../common/types";
import { sendInputPort } from "../infrastructure/inputPort/sendInputPort";
import { EmployeeOutputPort } from "../infrastructure/outputPort/employeeOutputPort";
import { EmployeeModel } from "../domain/models/employeeModel";

@injectable()
export class SendUseCase implements sendInputPort {
  constructor(
    @inject(TYPES.EmployeeOutputPort)
    private readonly employeeOutputPort: EmployeeOutputPort
  ) {}

  async sendEmployee(employeeModel: EmployeeModel): Promise<void> {
    try {
      await this.employeeOutputPort.employeeSend(employeeModel);
    } catch (error) {
      throw new Error("Error");
    }
  }
}
