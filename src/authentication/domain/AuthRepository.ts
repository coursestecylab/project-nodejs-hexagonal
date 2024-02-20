export interface AuthRepository {
  validateCredentials(username: string, password: string): Promise<boolean>;
}
