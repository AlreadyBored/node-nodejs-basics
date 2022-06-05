import { promisify } from "util";
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { open } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { stderr, stdout } from "process";
const pipeLine = promisify(pipeline);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const compress = async () => {
  try {
    stdout.write(`\t\t\t-----ZIP THE FILE-----\n`)
    const input = await open(path.join(__dirname, "files/fileToCompress.txt"), "r+");
    const output = await open(path.join(__dirname, "files/arhive.gz"), "w");
    const zip = createGzip();
    await pipeLine(input.createReadStream(), zip, output.createWriteStream());
    await input.close();
    await output.close();
    stdout.write("The file was arhived succesfully.")
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err.message}`);
  }; 
};

//compress();