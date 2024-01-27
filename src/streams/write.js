import { createWriteStream } from "fs";
import { stdin } from "process";

const write = async () => {
  const writeStream = createWriteStream("src/streams/files/fileToWrite.txt");

  stdin.pipe(writeStream);
};

await write();
