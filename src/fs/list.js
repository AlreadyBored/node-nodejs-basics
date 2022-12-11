import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  try {
    const data = await readdir(__dirname);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
};

await list();
