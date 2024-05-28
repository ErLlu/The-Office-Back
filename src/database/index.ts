import chalk from "chalk";
import mongoose from "mongoose";

const connectToDataBase = async (uri: string) => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(
      chalk.red("Error connecting database", (error as Error).message),
    );
  }
};

export default connectToDataBase;
