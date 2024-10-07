import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const read = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, "files", "fileToRead.txt");

  const stream = fs.createReadStream(filePath);

  let content = "";
  stream.on("data", (chunk) => (content += chunk));
  stream.on("end", () => process.stdout.write(content));
};

await read();
