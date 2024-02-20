import { EmployeeRepository } from "../domain/EmployeeRepository";
import { EmployeeToken } from "../domain/EmployeeToken";

export class EmployeeHandler {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async authenticate(id: string): Promise<string> {
    const isValid = await this.employeeRepository.validateEmployee(id);
    if (!isValid) {
      throw new Error("Invalid employee");
    }
    const token = new EmployeeToken();
    return token.toString();
  }
}
