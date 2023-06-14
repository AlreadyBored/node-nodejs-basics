import { writeFile } from "fs/promises";
import * as Utils from "./utils.js";

const create = async () => {
  const fileToCreate = "./src/fs/files/fresh.txt";
  const alreadyExist = await Utils.isFileExist(fileToCreate);
  if (alreadyExist) {
    throw new Error("FS operation failed");
  } else {
    await writeFile(fileToCreate, "I am fresh and young");
  }
};

await create();
