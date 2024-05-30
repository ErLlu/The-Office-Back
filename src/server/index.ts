import "dotenv/config";
import chalk from "chalk";
import { app } from "../app/app.js";

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
  });
};

export default startServer;
