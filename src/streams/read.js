import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
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
    console.error(err);
    process.exitCode = 1;
  });
};

await read();
