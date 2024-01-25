//Implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import fs from "node:fs";
import { getURLPath } from "../lib.js";

const write = async () => {
  const stream = fs.createWriteStream(
    getURLPath("./streams/files/fileToWrite.txt")
  );
  stream.on("error", console.error);

  process.stdin.on("data", (data) => {
    stream.write(data, "utf-8");
  });
  process.stdin.on("end", () => {
    stream.end();
  });
  process.stdin.on("error", console.error);
};

await write();
