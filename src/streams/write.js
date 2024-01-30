import { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToWritePath = path.join(basePath, "files/fileToWrite.txt");

  const fileStream = createWriteStream(fileToWritePath);
  process.stdin.pipe(fileStream);
};

await write();
