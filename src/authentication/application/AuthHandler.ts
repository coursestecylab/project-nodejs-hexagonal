import { AuthRepository } from "../domain/AuthRepository";
import { AuthToken } from "../domain/AuthToken";

export class AuthHandler {
  constructor(private readonly authRepository: AuthRepository) {}

  async authenticate(username: string, password: string): Promise<string> {
    const isValid = await this.authRepository.validateCredentials(
      username,
      password
    );
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    const token = new AuthToken();
    return token.toString();
  }
}
