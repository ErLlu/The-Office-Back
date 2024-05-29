import chalk from "chalk";
import "dotenv/config";
import { app } from "./app";

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
  });
};

export default startServer;
