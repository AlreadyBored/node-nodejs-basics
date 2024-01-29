import fs from "node:fs/promises";
import { existsSync } from "fs";

const content = "I am fresh and young";
const error = "FS operation failed";
const path = "src/fs/files/fresh.txt";

const create = async () => {
  try {
    if (existsSync(path)) {
      throw new Error(error);
    }
    await fs.appendFile(path, content);
  } catch (err) {
    console.log(err);
  }
};

await create();
