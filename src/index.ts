import "dotenv/config";
import startServer from "./server/index.js";

const port = process.env.PORT ?? 8001;

startServer(port as number);
