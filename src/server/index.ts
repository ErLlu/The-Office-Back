import "dotenv/config";
import servServer from "./app.js";

const port = process.env.PORT ?? 8001;

servServer(port as number);
