import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "files/fileToWrite.txt");

  try {
    console.log("Начинайте вводить текст. Для выхода используйте 'Ctrl+C'");
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
  } catch (err) {
    console.error(err);
  }
};

write();
