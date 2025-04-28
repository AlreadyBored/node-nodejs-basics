import { createReadStream } from "node:fs";
import { join } from "node:path";

const dirname = import.meta.dirname;

const read = async () => {
  const filePath = join(dirname, "files", "fileToRead.txt");
  const stream = createReadStream(filePath, { encoding: "utf-8" });

  stream.pipe(process.stdout);

  stream.on("error", () => {
    throw new Error("FS operation failed");
  });
};

await read();
