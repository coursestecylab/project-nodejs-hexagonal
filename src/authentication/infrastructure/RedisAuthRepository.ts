import { AuthRepository } from "../domain/AuthRepository";

export class RedisAuthRepository implements AuthRepository {
  async validateCredentials(
    username: string,
    password: string
  ): Promise<boolean> {
    return true;
  }
}
