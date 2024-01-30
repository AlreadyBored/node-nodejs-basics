import { createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToReadPath = path.join(basePath, "files/fileToRead.txt");

  const fileStream = createReadStream(fileToReadPath);

  fileStream.pipe(process.stdout);
};

await read();
