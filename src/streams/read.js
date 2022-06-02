import { createReadStream } from "fs";

export const read = async () => {
  // Write your code here
  createReadStream("files/fileToRead.txt").pipe(process.stdout);
};
