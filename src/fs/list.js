import { promises } from "fs";

const list = async () => {
  const errorMessage = "FS operation failed";
  const folderPath = "./files";

  try {
    await promises.stat(folderPath);
    const files = await promises.readdir(folderPath);

    files.forEach((file) => console.log(file));
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await list();
