import "reflect-metadata";
import { TYPES } from "./types";
import { Container } from "inversify";
import { sendInputPort } from "../service/infrastructure/inputPort/sendInputPort";
import { SendUseCase } from "../service/application/sendUseCase";
import { EmployeeOutputPort } from "../service/infrastructure/outputPort/employeeOutputPort";
import { externalEmployeeAdapter } from "../service/infrastructure/outputAdapter/externalEmployeeAdapter";

const initContainer = () => {
  const container = new Container();
  container.bind<sendInputPort>(TYPES.sendInputPort).to(SendUseCase);
  container
    .bind<EmployeeOutputPort>(TYPES.EmployeeOutputPort)
    .to(externalEmployeeAdapter);
  return container;
};

export { initContainer };
