import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { promisify } from "util";
import { pipeline } from "stream";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folder = path.join(__dirname, "files");

const pipelineAsync = promisify(pipeline);

const doZip = async (input, output) => {
  const source = createReadStream(input);
  const gzip = createGzip();
  const destination = createWriteStream(output);
  await pipelineAsync(source, gzip, destination);
};

const compress = async () => {
  const source = path.join(folder, "fileToCompress.txt");
  const destination = path.join(folder, "archive.gz");
  await doZip(source, destination).catch((err) => {
    console.error("An error occurred: ", err);
    process.exitCode = 1;
  });
};

await compress();
