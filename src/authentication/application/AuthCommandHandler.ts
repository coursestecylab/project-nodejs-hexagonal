import { AuthCommand } from "./AuthCommand";
import { AuthHandler } from "./AuthHandler";

export class AuthCommandHandler {
  constructor(private readonly authHandler: AuthHandler) {}
  async handle(command: AuthCommand): Promise<string> {
    const token = await this.authHandler.authenticate(
      command.username,
      command.password
    );
    return token;
  }
}
