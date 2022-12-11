import path from "path";
import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import process from "process";
import { pipeline } from "stream";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(__dirname, "./files", "fileToRead.txt");

const read = async () => {
  pipeline(createReadStream(filePath), process.stdout, (err, value) => {
    console.log("value", value);
  });
};

await read();
