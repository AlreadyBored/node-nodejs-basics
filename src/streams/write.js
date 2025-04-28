import { createWriteStream } from "fs";

const write = async () => {
  const filePath = "src/streams/files/fileToWrite.txt";
  const writableStream = createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  return new Promise((resolve, reject) => {
    writableStream.on("finish", resolve);
    writableStream.on("error", (error) => {
      if (error.code === "ENOENT") {
        reject(new Error("FS operation failed"));
      } else {
        reject(error);
      }
    });
  });
};

await write();
