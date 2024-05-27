import chalk from "chalk";
import express from "express";

export const app = express();

export const servServer = (port: number) => {
  app.listen(port, () => {
    console.log(`Listening on ${chalk.green(`http://localhost:${port}`)}`);
  });
};

export default servServer;
