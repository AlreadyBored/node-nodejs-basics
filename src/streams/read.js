import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { access, constants } from "node:fs/promises";

import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  access(filePath, constants.F_OK) // check if file exists
    .then(() => {
      const readableStream = createReadStream(filePath);
      readableStream.on("data", (chunk) => {
        const dataToWrite = chunk.toString();
        console.log(stdout.write(dataToWrite));
      });
      readableStream.on("end", () => {
        console.log("end of reading the stream");
      });
    })
    .catch((err) => console.log(err.message));
};

await read();
