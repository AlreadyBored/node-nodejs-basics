import path from "path";
import process from "process";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import { pipeline } from "stream";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(__dirname, "./files", "fileToWrite.txt");

const write = async () => {
  const writableStream = createWriteStream(filePath, { flags: "a" });

  pipeline(process.stdin, writableStream, (err) => {
    console.log(err);
  });
};

await write();
