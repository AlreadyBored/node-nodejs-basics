import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  try {
    const readableStream = fs.createReadStream(filePath);

    for await (const chunk of readableStream) {
      process.stdout.write(chunk);
    }
  } catch (error) {
    console.error(error);
  }
};

await read();
