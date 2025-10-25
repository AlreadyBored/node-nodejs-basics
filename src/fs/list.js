import { readdir } from 'node:fs/promises';

const list = async () => {
  const folder = "files";

  try {
    const files = await readdir(folder);
    for (const file of files) console.log(file);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await list();
