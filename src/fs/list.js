import fs from "node:fs/promises";
import { FILES_DIR } from "./config.js";

const list = async () => {
  try {
    const files = await fs.readdir(FILES_DIR);

    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
