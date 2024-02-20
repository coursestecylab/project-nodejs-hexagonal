import { EmployeeRepository } from "../domain/EmployeeRepository";

export class MySqlEmployeeRepository implements EmployeeRepository {
  async validateEmployee(id: string): Promise<boolean> {
    return true;
  }
}
