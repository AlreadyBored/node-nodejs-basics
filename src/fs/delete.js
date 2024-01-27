import { promises as fs } from "fs";
import { fileExists, getDirName } from "../utils/utils.js";

const remove = async () => {
  const path = getDirName(import.meta.url) + "/files/fileToRemove.txt";
  const exists = await fileExists(path);

  try {
    if (exists) {
      await fs.unlink(path);
      console.log("Successfully deleted file!");
    } else {
        throw new Error("FS operation failed");
    }
  } catch (err) {
    console.log(err);
  }
};

await remove();
