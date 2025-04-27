import { readdir } from "node:fs/promises";

const list = async () => {
  const listSource = "./src/fs/files/";

  try {
    const listData = await readdir(listSource);
    console.log(listData);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
