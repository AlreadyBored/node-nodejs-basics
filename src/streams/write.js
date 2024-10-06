import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createWriteStream } from "fs";
import { createInterface } from "readline";
import { stdin } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const file = path.join(__dirname, "files", `fileToWrite.txt`);

  const ws = createWriteStream(file, { flags: "a", encoding: "utf-8" });

  process.stdin.on("data", (data) => {
    const text = data.toString().trim();
    if (text.toLowerCase() == "exit") {
      ws.end();
      process.exit();
    } else ws.write(text + "\n");
  });

  ws.on("error", (err) => {
    console.log(err.message);
  });
};

await write();
