import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const read = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename);
    const rs = createReadStream(
        __dirname + '/files/fileToRead.txt',
        { encoding: "utf-8" }
    )
    rs.pipe(process.stdout);
};

await read();