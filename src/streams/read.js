import { createReadStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readStream = createReadStream(
    path.resolve(__dirname, "files/fileToRead.txt")
  );

  readStream.pipe(process.stdout, { end: false });

  readStream.on("end", () => {
    console.log();
  });
};

await read();
