import { promises as fs } from "fs";
import { fileExists, getDirName } from "../utils/utils.js";

const list = async () => {
  const path = getDirName(import.meta.url) + "/files";
  const exists = await fileExists(path);

  try {
    if (exists) {
      const data = await fs.readdir(path);
      data.forEach((file) => {
        console.log(file);
      });
    } else {
      throw new Error("FS operation failed");
    }
  } catch (err) {
    console.log(err);
  }
};

await list();
