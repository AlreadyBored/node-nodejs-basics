import { createReadStream } from "node:fs";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/fileToRead.txt");

const read = async () => {
  const readableStream = createReadStream(path, "utf-8");

  readableStream.on("data", (data) => {
    process.stdout.write(data + "\n");
  });
};

await read();
