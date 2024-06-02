import "dotenv/config";
import chalk from "chalk";
import { app } from "./app/app.js";

export const startServer = (port: number) => {
  app.listen(port, () => {
    const url = `http://localhost:${port}`;
    const colorUrl = chalk.green(url);
    console.log("Listening on", colorUrl);
  });
};

export default startServer;
