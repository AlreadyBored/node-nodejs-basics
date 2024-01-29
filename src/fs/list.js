import fs from "node:fs";
import { readdir } from "node:fs/promises";

const list = async () => {
  const filesName = "./src/fs/files";

  if (!fs.existsSync(filesName)) {
    throw new Error("FS operation failed");
  }

  try {
    const files = await readdir(filesName);

    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.error(error);
  }
};

await list();
