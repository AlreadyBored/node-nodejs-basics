import { createReadStream } from "node:fs";
import { URL, fileURLToPath } from "node:url";
const read = async () => {
  // Write your code here
  const fileURL = new URL("./files/fileToRead.txt", import.meta.url);
  const filePath = fileURLToPath(fileURL);

  const readableStream = createReadStream(filePath, { encoding: "utf-8" });

  readableStream.pipe(process.stdout);
};

await read();
