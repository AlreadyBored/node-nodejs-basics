import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
const write = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
  const stream = createWriteStream(pathToFile, "utf-8");
  process.stdout.write("Start writing, the stream is open\n");
  process.stdin.pipe(stream);
  process.stdin.on("end", () => {
    stream.end();
    process.stdout.write("Writing complete, stream closed.");
    process.exit();
  });
  stream.on("error", (err) => {
    throw new Error("FS operation failed", err);
  });
};

await write();
