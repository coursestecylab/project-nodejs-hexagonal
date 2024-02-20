import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

import { EmployeeCommand } from "./application/EmployeeCommand";
import { EmployeeCommandHandler } from "./application/EmployeeCommandHandler";
import { EmployeeHandler } from "./application/EmployeeHandler";
import { MySqlEmployeeRepository } from "./infrastructure/MySqlEmployeeRepository";

const employeeRepository = new MySqlEmployeeRepository();
const employeeHandler = new EmployeeHandler(employeeRepository);
const employeeCommandHandler = new EmployeeCommandHandler(employeeHandler);

export const lambdaHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  try {
    if (event.httpMethod !== "POST") {
      throw new Error(`Unsupported method "${event.httpMethod}"`);
    }

    const { id } = JSON.parse(event.body || "{}") as EmployeeCommand;
    const token = await employeeCommandHandler.handle({ id });

    response = {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (error: unknown) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    response = {
      statusCode: 400,
      body: JSON.stringify({ error: errorMessage }),
    };
  }

  return response;
};
