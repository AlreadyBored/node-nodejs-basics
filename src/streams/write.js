import path from "path";
import * as url from "url";
import { createWriteStream } from "fs";

export const write = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "files", "fileToWrite.txt");
  const writable = createWriteStream(filePath);

  process.stdin.pipe(writable);
};
write();
