import { createWriteStream } from "node:fs";
import { join } from "node:path";

const dirname = import.meta.dirname;

const write = async () => {
  const filePath = join(dirname, "files", "fileToWrite.txt");
  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);
  process.stdin.resume();

  stream.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await write();
