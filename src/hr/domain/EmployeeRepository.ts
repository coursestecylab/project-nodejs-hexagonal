export interface EmployeeRepository {
  validateEmployee(id: string): Promise<boolean>;
}
