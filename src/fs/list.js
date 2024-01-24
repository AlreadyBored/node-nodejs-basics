import { readdir } from "fs/promises";

const list = async () => {
  try {
    const names = await readdir("src/fs/files");
    console.log(names);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
