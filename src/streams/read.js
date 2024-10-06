import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { createReadStream } from "fs";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const file = path.join(__dirname, "files", "fileToRead.txt");

  const rs = createReadStream(file, { encoding: "utf-8" });
  const rl = readline.createInterface({
    input: rs,
  });

  rl.on("line", (line) => {
    process.stdout.write(`${line}\n`);
  });

  rl.on("error", (err) => {
    console.log(err.message);
  });
};

await read();
