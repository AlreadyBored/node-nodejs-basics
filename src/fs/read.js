import { readFile } from "node:fs";

const read = async () => {
  readFile("src/fs/files/fileToRead.txt", "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
