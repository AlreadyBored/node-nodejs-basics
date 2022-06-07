import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(
    path.resolve(__dirname, "files/fileToRead.txt"),
    {
      encoding: "utf-8",
    }
  );

  stream.on("data", (data) => {
    console.log(data);
  });
};

read();
