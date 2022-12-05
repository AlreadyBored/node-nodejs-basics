import { createWriteStream } from "node:fs";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/fileToWrite.txt");

const write = async () => {
  const writableStream = createWriteStream(path, "utf-8");

  process.stdin.on("data", (data) => {
    writableStream.write(data);
  });
};

await write();
