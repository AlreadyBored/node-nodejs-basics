import { createWriteStream } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const path = join(__dirname, "files/fileToWrite.txt");
  const ws = createWriteStream(path);
  const rs = process.stdin;
  rs.pipe(ws);
};

await write();
