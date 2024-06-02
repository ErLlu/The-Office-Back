import chalk from "chalk";
import mongoose from "mongoose";

const connectToDataBase = async (dataBaseUri: string): Promise<void> => {
  try {
    await mongoose.connect(dataBaseUri);
    console.log(chalk.green("Connected to database"));
  } catch (error) {
    console.log(
      chalk.red("Error connecting database", (error as Error).message),
    );
  }
};

export default connectToDataBase;
