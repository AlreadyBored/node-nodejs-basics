//Implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import fs from "node:fs";
import { getURLPath } from "../lib.js";

const read = async () => {
  const fileToRead = getURLPath("./streams/files/fileToRead.txt");
  const stream = fs.createReadStream(fileToRead, "utf-8");

  let data = "";
  try {
    for await (const chunk of stream) {
      data += chunk;
    }
    process.stdout.write(`${data}\n`);
  } catch (e) {
    console.error(e.message);
  }
};

await read();
