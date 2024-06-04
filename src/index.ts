import "dotenv/config";
import connectToDataBase from "./database/index.js";
import startServer from "./server/index.js";

const port = process.env.PORT ?? 8001;

const dataBaseUri = process.env.MONGODB_URL!;

try {
  await connectToDataBase(dataBaseUri);
  startServer(port as number);
} catch (error) {
  console.error("Error connecting to database:", error);
}
