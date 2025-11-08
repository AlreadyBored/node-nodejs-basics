import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  return new Promise((resolve, reject) => {
    const stream = createReadStream(filePath, "utf-8");

    stream.pipe(process.stdout);

    stream.on("end", resolve);
    stream.on("error", () => {
      console.error("FS operation failed");
      reject();
    });
  });
};

await read();