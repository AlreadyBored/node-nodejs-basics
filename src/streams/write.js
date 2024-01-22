import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const filePath = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const ws = createWriteStream(filePath);

  stdin.setEncoding("utf8");
  stdin.on("data", (chunk) => {
    ws.write(chunk);
    ws.on("finish", () => {
      console.log("Data has been written to the file.");
    });

    ws.on("error", (err) => {
      console.error(`Error writing to file: ${err}`);
    });
  });
  stdin.on("end", () => {
    console.log("end of writing the stream");
  });
};

await write();
