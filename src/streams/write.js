import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const pathToWriteFile = path.join(__dirname, "files", "fileToWrite.txt");

  process.stdin.on("data", (data) => {
    fs.writeFile(pathToWriteFile, data.toString(), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("\nData was Writed to File fileToWrite.txt\n");
        process.exit();
      }
    });
  });
};

await write();
