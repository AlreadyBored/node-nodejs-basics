import { readdir } from "node:fs/promises";

const __dirname = import.meta.dirname;

const list = async () => {
  try {
    console.log(await readdir(__dirname + "/files"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
