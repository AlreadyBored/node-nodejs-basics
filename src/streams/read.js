import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");
const stream = fs.createReadStream(pathToFile, "utf-8");

const read = async () => {
  try {
    stream.on("data", (chunk) => process.stdout.write(chunk));
  } catch (err) {
    console.log(err);
  }
};

await read();