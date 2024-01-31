import { createReadStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const pathToFile = path.resolve(__dirname, "files", "fileToRead.txt");

  const readStream = createReadStream(pathToFile);

  readStream.on("error", (error) => {
    console.log(`Error reading file: ${error}`);
  });

  readStream.pipe(process.stdout);
};

await read();
