import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    console.log(await readdir("./src/fs/files"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
