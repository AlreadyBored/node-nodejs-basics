import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const pathName = join(__dirname, "files/fresh.txt");
  const readStream = createReadStream(pathName, {
    encoding: "utf-8",
  });

  readStream.on("error", () => {
    const writeStream = createWriteStream(pathName, {
      flags: "wx",
    });
    writeStream.write("I am fresh and young");
    writeStream.end();
  });

  readStream.on("data", () => {
    throw new Error(`FS operation failed`);
  });
};

try {
  await create();
} catch (e) {
  console.log(`${e}`);
}
