import { promises } from "fs";

const read = async () => {
  const errorMessage = "FS operation failed";
  const filerPath = "./files/fileToRead.txt";

  try {
    const data = await promises.readFile(filerPath, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await read();
