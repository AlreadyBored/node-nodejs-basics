import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");
const stream = fs.createWriteStream(pathToFile, "utf-8");
const write = async () => {
  try {
    process.stdin.on("data", (chunk) => {
      stream.write(chunk);
    });
  } catch (err) {
    console.log(err);
  }
};

await write();