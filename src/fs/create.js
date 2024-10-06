import { constants, promises } from "fs";

const create = async () => {
  const errorMessage = "FS operation failed";
  const filePath = "./files/fresh.txt";
  const messageToWrite = "I am fresh and young";

  try {
    await promises.access(filePath, constants.F_OK);
    console.error(errorMessage);
  } catch (error) {
    await promises.writeFile(filePath, messageToWrite);
  }
};

await create();
