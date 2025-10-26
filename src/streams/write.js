import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, 'files', "fileToWrite.txt");

  const writeStream = fs.createWriteStream(filePath, { encoding: "utf8" });

  console.log("Введите текст (Ctrl+D или Ctrl+C для завершения):");

  process.stdin.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Данные записаны в файл: ${filePath}`);
  });

  writeStream.on("error", (err) => {
    console.error("FS operation failed", err.message);
  });

  process.stdin.on("error", (err) => {
    console.error("Error reading stdin", err.message);
  });
};

await write();
