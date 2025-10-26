import { readdir, access } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

const list = async () => {
  // Write your code here
  const directoryURL = new URL("./files/", import.meta.url);
  const directory = fileURLToPath(directoryURL);
  const errorMessage = "FS operation failed";
  try {
    try {
      await access(directory);
    } catch (e) {
      throw new Error(errorMessage);
    }
    const fileNames = await readdir(directory);
    console.log(fileNames);
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      console.log(e);
    }
  }
};

await list();
