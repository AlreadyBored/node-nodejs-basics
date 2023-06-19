import fs from "fs";

const url = import.meta.url;
const path = new URL("./files/fileToWrite.txt", url);

const write = async () => {
  const writeStream = fs.createWriteStream(path, {
    flags: "a",
  });
  process.stdin.pipe(writeStream);
};

await write();
