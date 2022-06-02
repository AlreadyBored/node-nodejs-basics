import { stderr, stdout } from "process";
import { createHash } from "crypto";
import { open } from "fs/promises";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

export const calculateHash = async () => {
  try {
    stdout.write(`\t\t\t-----CALCULATING SHA256 HASH-----\n`);
    const filehandle = await open(__filename, "r");
    const data = await filehandle.readFile();
    await filehandle.close();
    const hash = createHash("sha256");
    hash.update(data);
    stdout.write(`The SHA256 HASH is ${hash.digest("hex")}. \n`);
  } 
  catch(err) {
    stderr.write(`ERROR>>> ${err.message} \n`);
  };  
};

calculateHash();