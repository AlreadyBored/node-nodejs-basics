import fs from "fs";
import path from "path";
import { pipeline } from "stream/promises";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(filePath, { encoding: "utf-8" });
  try {
    stream.on("data", (result) => {
      console.log(result);
    }); // This event is optional, just to show data in console
    await pipeline(stream, process.stdout);
  } catch (err) {
    console.error(`There is an error in reading`, err.message);
  }
};

await read();
