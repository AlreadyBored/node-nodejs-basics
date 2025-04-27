import { promises as fs } from "fs";

const write = async () => {
  const filePath = "./files/fileToWrite.txt";
  const writeStream = fs.createWriteStream(filePath, "utf-8");
  process.stdin.pipe(writeStream);
};

await write();
