import fs from "fs";

const write = async () => {
  const filePath = "src/streams/files/fileToWrite.txt";
  const writeableStream = fs.createWriteStream(filePath);
  process.stdin.pipe(writeableStream);
};

await write();
