import { createWriteStream } from "node:fs";
import { URL, fileURLToPath } from "node:url";
const write = async () => {
  // Write your code here
  const fileURL = new URL("./files/fileToWrite.txt", import.meta.url);
  const filePath = fileURLToPath(fileURL);

  const writableStream = createWriteStream(filePath, { encoding: "utf-8" });

  process.stdin.pipe(writableStream);
};

await write();
