import { promises as fs } from "fs";
import { fileExists, getDirName } from "../utils/utils.js";

const create = async () => {
  const path = getDirName(import.meta.url) + "/files/fresh.txt";
  const content = "I am fresh and young";

  const exists = await fileExists(path);

  try {
    if (exists) {
      throw new Error("FS operation failed");
    } else {
      await fs.writeFile(path, content);
    }
  } catch (err) {
    console.log(err);
  }
};

await create();
