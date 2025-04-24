import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const read = async () => {
  try {
    const fileStream = createReadStream("files/fileToRead.txt", { encoding: "utf8" });

    await pipeline(fileStream, process.stdout);
  } catch (error) {
    console.error("Error reading file:", error.message);
    throw error;
  }
};

await read();
