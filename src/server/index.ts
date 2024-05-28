import "dotenv/config";
import { app } from "./app";
import chalk from "chalk";

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
  });
};

export default startServer;
