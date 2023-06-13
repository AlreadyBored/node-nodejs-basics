import { createReadStream } from "fs";
import path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const pathToFile = path.join(__dirname, "files/fileToRead.txt");
  const reader = createReadStream(pathToFile, {
    encoding: "utf-8",
  });

  reader.on("data", (chunk) => console.log(chunk));
};

await read();
