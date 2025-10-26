import { createReadStream } from "node:fs";
import { join } from "node:path";

const read = async () => {
  const filePath = join(
    process.cwd(),
    "src",
    "streams",
    "files",
    "fileToRead.txt"
  );

  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
