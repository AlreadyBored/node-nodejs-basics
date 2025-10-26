import { rename as renamePromise, access } from "node:fs/promises";
import { URL, fileURLToPath } from "node:url";

const rename = async () => {
  // Write your code here
  const oldPathURL = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPathURL = new URL("./files/properFilename.md", import.meta.url);
  const oldPath = fileURLToPath(oldPathURL);
  const newPath = fileURLToPath(newPathURL);
  const errorMessage = "FS operation failed";
  try {
    try {
      await access(oldPath);
    } catch (e) {
      throw new Error(errorMessage);
    }
    await access(newPath);
    throw new Error(errorMessage);
  } catch (e) {
    if (e instanceof Error && e.message === errorMessage) {
      console.log(e.message);
    } else {
      try {
        await renamePromise(oldPath, newPath);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

await rename();
