import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const write = async () => {
  try {
    const fileStream = createWriteStream("files/fileToWrite.txt");

    await pipeline(process.stdin, fileStream);

    console.log("Data has been written to fileToWrite.txt");
  } catch (error) {
    console.error("Error writing to file:", error.message);
    throw error;
  }
};

await write();
