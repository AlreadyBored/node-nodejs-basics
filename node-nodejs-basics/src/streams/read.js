import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  const currentDir = path.resolve("src", "streams");
  const fileName = "fileToRead.txt";
  const filePath = path.join(currentDir, "files", fileName);

  const fileStream = createReadStream(filePath);

  fileStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  return new Promise((res, rej) => {
    fileStream.on("error", (err) => {
      rej(err);
    });

    fileStream.on("end", () => {
      res();
    });
  });
};

await read();
