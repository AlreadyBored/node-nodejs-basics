import { createReadStream } from "fs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = createReadStream(pathToFile);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    process.stdout.write("\n");
  });

  readStream.on("error", (error) => {
    throw error;
  });
};

await read();
