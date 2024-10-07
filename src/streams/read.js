import fs from "fs";

const read = async () => {
  const filePath = "src/streams/files/fileToRead.txt";
  const readableStream = fs.createReadStream(filePath, { encoding: "utf-8" });
  readableStream.pipe(process.stdout);
};

await read();
