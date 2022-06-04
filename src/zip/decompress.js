import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";


export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sourcefilePath = path.join(__dirname, "files/archive.gz");
    const destinationfilePath = path.join(__dirname, "files/fileToCompress.txt");
    const unzip = createUnzip();
    const source = createReadStream(sourcefilePath);
    const destination = createWriteStream(destinationfilePath);
  
    try {
      source.pipe(unzip).pipe(destination);
    } catch (err) {
      console.error(err);
    } 
};

decompress();