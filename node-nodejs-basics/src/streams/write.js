import { createWriteStream } from "fs";
import path from "path";

const write = async () => {
  const currentDir = path.resolve("src", "streams");
  const fileName = "fileToWrite.txt";
  const filePath = path.join(currentDir, "files", fileName);

  const fileStream = createWriteStream(filePath);

  process.stdin.on("data", (chunk) => {
    fileStream.write(chunk);
  });

  process.stdin.on("err", (err) => {
    console.error("Error reading from stdin:", err.message);
    process.exit(1);
  });

  process.stdin.on("end", () => {
    fileStream.end();
    console.log("Data written to", filePath);
  });
};

await write();
