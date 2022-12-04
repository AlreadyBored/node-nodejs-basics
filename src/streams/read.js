import { createReadStream } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const path = join(__dirname, "files/fileToRead.txt");
  const rs = createReadStream(path);
  rs.pipe(process.stdout);
};

await read();
