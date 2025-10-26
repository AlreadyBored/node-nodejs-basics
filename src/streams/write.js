import { createWriteStream } from "node:fs";
import { join } from "node:path";

const write = async () => {
  const filePath = join(
    process.cwd(),
    "src",
    "streams",
    "files",
    "fileToWrite.txt"
  );

  const stream = createWriteStream(filePath);
  process.stdin.pipe(stream);
};

await write();
