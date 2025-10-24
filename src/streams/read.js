import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const readableStream = fs.createReadStream(filePath);

  readableStream.pipe(process.stdout);

  readableStream.on("end", () => {
    process.stdout.write("\nDone read file.\n");
  });
};

await read();
