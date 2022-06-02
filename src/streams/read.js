import * as fs from "fs";
import path from "path";
import * as url from "url";
import { createReadStream } from "fs";

export const read = async () => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "files", "fileToRead.txt");
  const readable = createReadStream(filePath);

  readable.pipe(process.stdout);
};
read();
