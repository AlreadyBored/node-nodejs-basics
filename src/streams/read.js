import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", "fileToRead.txt");

  const readStream = createReadStream(filePath);

  readStream.setEncoding("utf-8").pipe(process.stdout);
};

await read();
