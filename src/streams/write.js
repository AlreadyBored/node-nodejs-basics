import { createWriteStream } from "fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as readline from "node:readline";

const { stdin: input, stdout: output } = process;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const folderPath = join(__dirname, "files");
  const outputFile = createWriteStream(join(folderPath, "fileToWrite.txt"));
  const rl = readline.createInterface({ input, output });

  rl.question("Hello! Enter some text (ctrl-c for exit): \n", (text) => {
    outputFile.write(text + "\n");
  });

  rl.on("line", (text) => {
    outputFile.write(text + "\n");
  })
    .on("SIGINT", () => {
      process.exit(0);
    })
    .on("close", () => {
      process.exit(0);
    });
};

await write();
