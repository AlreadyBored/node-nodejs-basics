import { promisify } from "util";
import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { open } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { stderr, stdout } from "process";
const pipeLine = promisify(pipeline);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const decompress = async () => {
  try {
    stdout.write(`\t\t\t-----UNZIP THE FILE-----\n`)
    const input = await open(path.join(__dirname, "files/arhive.gz"), "r+");
    const output = await open(path.join(__dirname, "files/fileToCompress.txt"), "w");
    const zip = createGunzip();
    await pipeLine(input.createReadStream(), zip, output.createWriteStream());
    await input.close();
    await output.close();
    stdout.write("The file was unziped succesfully.")
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err.message}`);
  }; 
};

decompress();