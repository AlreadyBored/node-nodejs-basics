import fs from "fs";
import { Writable } from "stream";

const write = async () => {
  const fileToWrite = "src/streams/files/fileToWrite.txt";
  const writableStream = fs.createWriteStream(fileToWrite);
  const writeDataToFile = new Writable({
    write(chunk, encoding, callback) {
      // Write the data to the file
      writableStream.write(chunk, encoding);
      callback();
    },
  });

  process.stdin.pipe(writeDataToFile);

  writeDataToFile.on("finish", () => {
    writableStream.end();
  });

  writeDataToFile.on("error", (err) => {
    throw new Error("")
  });

  process.on("exit", () => {
    writableStream.end();
  });

  process.on("SIGINT", () => {
    writableStream.end();
    process.exit();
  });
};

await write();
