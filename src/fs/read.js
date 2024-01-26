import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const pathToFile = join(__dirname, "files/fileToRead.txt");
  const reader = createReadStream(pathToFile, { encoding: "utf-8" });
  reader.on("data", (chunk) => console.log(chunk));
};

await read();
