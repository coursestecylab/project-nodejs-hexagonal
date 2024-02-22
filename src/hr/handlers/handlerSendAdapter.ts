import middy from "@middy/core";
import { EmployeeModel } from "../service/domain/models/employeeModel";
import { initContainer } from "../common/container";
import { SendUseCase } from "../service/application/sendUseCase";
import { TYPES } from "../common/types";

const sendCreation = initContainer().get<SendUseCase>(TYPES.sendInputPort);

export const main = middy(async (event, context) => {
  const employeModel: EmployeeModel = {
    id: 1,
    firstName: "Juan",
    lastName: "Pérez",
    age: 30,
    position: "Desarrollador",
    salary: 50000,
  };

  await sendCreation.sendEmployee(employeModel);

  console.log("procesando el envío");

  return { status: 200 };
});
