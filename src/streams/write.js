import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const write = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "fileToWrite.txt");

  const stream = fs.createWriteStream(filePath);

  process.stdout.write("Input your data\n");
  process.stdout.write("Press Ctrl+C for exit\n");
  process.stdin.on("data", (data) => stream.write(data));
};

await write();
