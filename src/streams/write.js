import { createWriteStream } from "fs";

export const write = async () => {
  // Write your code here
  process.stdin.on("data", (data) => {
    createWriteStream("files/fileToWrite.txt", "utf-8").write(data);
  });
};
