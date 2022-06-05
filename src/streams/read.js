import { open } from "fs/promises";
import path from "path";
import { stderr, stdout } from "process";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  try {
    stdout.write(`\t\t\t-----READING THE FILE WITH THE STREAMS API-----\n`)
    const filehandle = await open(path.join(__dirname, "files/fileToRead.txt"), "r");
    const stream = filehandle.createReadStream({ emitClose: false, highWaterMark: 5 });
    stream.on("end", async () => await filehandle.close());
    stream.pipe(stdout);
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err.message}`);
  };
};

//read();