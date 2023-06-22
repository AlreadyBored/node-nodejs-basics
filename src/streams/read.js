import fs from "fs";
import { pipeline as pipelineAsync } from "stream/promises";

const read = async () => {
  const filePath = "files/fileToWrite.txt";
  const writableStream = fs.createWriteStream(filePath);

  try {
    await pipelineAsync(process.stdin, writableStream);
    console.log("File writing completed.");
  } catch (error) {
    console.error(`Error writing to file: ${error.message}`);
  }
};

await read();
