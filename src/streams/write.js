import { stdin, stdout } from "process";
import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const fileName = join(__dirname, "files/fileToWrite.txt");
  const file = createWriteStream(fileName);
  stdin.pipe(file);
  stdin.resume();
};

await write();
