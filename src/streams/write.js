import { open } from "fs/promises";
import path from "path";
import { stderr, stdout, stdin } from "process";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  try {
    stdout.write(`\t\t\t-----WRITING TO THE FILE FROM THE CONSOLE WITH THE STREAMS API-----\n`);
    stdout.write(`\t\t\tTo end press CTRL + C. You can see the result in ./streams/files/fileToWrite.txt.\n`);
    const filehandle = await open(path.join(__dirname, "files/fileToWrite.txt"), "w");
    const stream = filehandle.createWriteStream({ emitClose: false });
    stream.on("end", async () => await filehandle.close());
    stdin.pipe(stream);
  }
  catch(err) {
    stderr.write(`ERROR>>> ${err.message}`);
  };
};

//write();