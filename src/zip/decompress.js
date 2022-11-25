import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folder = path.join(__dirname, "files");

const pipelineAsync = promisify(pipeline);

const doUnZip = async (input, output) => {
  const source = createReadStream(input);
  const unzip = createGunzip();
  const destination = createWriteStream(output);
  await pipelineAsync(source, unzip, destination);
};

const decompress = async () => {
  const source = path.join(folder, "archive.gz");
  const destination = path.join(folder, "fileToCompress.txt");
  await doUnZip(source, destination).catch((err) => {
    console.error("An error occurred: ", err);
    process.exitCode = 1;
  });
};

await decompress();
