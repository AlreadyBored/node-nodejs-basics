import { createWriteStream } from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = createWriteStream(pathToFile);

  process.stdin.pipe(writeStream);

  writeStream.on('error', (error) => {
    throw error;
})
};

await write();
