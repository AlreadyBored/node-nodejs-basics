import { createWriteStream } from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const writeStream = createWriteStream(
    path.resolve(__dirname, "files/fileToWrite.txt")
  );

  process.stdin.pipe(writeStream);

  writeStream.on("open", () =>
    console.log("Запись началась введите что-нибудь в консоль")
  );

  writeStream.on("finish", () =>
    console.log("Запись завершена , хорошего дня тебе друг!")
  );
};

await write();
