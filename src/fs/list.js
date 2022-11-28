import { readdir } from "node:fs/promises";

const list = async () => {
  try {
    const folder = new URL("./files", import.meta.url);

    const files = await readdir(folder);

    files.forEach((file) => console.log(file));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
