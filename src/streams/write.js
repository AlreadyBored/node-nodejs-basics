import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import process from "node:process";

const write = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // Creates write stream for writing data to file.
  const writeStream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );
  // Watch what will be written in Command Line.
  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
  // Close app,close stream if Cntrl+C.
  process.on("SIGINT", () => {
    process.exit();
    writeStream.close();
  });
};

await write();
