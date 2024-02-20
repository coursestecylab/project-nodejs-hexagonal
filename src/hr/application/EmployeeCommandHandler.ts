import { EmployeeCommand } from "./EmployeeCommand";
import { EmployeeHandler } from "./EmployeeHandler";

export class EmployeeCommandHandler {
  constructor(private readonly employeeHandler: EmployeeHandler) {}
  async handle(command: EmployeeCommand): Promise<string> {
    const token = await this.employeeHandler.authenticate(command.id);
    return token;
  }
}
