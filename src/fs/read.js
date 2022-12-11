import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(__dirname, "./files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
};

await read();
