import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const dirName = path.join(__dirname, "files");
  const filePath = path.join(dirName, "fileToRead.txt");

  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  let data = "";

  readStream.on("data", (chunk) => {
    data += chunk;
  });

  readStream.on("end", () => {
    console.log(data);
  });

  readStream.on("error", (error) => {
    console.error(`Error reading file: ${error.message}`);
  });
};

await read();
