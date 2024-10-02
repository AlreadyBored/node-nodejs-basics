import { createReadStream, promises as fs } from "fs";
import path from "path";
const __dirname = path.resolve();
const read = async () => {
  // Write your code here
  const filePath = path.join(__dirname, "files", "fileToRead.txt");
  const stream = createReadStream(filePath, { encoding: "utf-8" });
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("\nFile reading completed.");
    console.log(stream);
  });
};

await read();
