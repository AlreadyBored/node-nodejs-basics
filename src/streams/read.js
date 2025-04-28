import { createReadStream } from "fs";

const read = async () => {
  const filePath = "src/streams/files/fileToRead.txt";
  const readStream = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    readStream.on("error", (error) => {
      if (error.code === "ENOENT") {
        reject(new Error("FS operation failed"));
      } else {
        reject(error);
      }
    });

    readStream.pipe(process.stdout);
    readStream.on("end", resolve);
  });
};

await read();
