import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    const files = await readdir("src/fs/files");
    for (const file of files) console.log(file);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
