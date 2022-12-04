import { createReadStream } from "fs";
import { stdout } from "process";

import { getPath } from "../fs/utils/fs.js";

const read = async () => {
    const path = getPath("streams", "files", "fileToRead.txt");
    const readableStream = createReadStream(path, { encoding: "utf8" });

    readableStream.pipe(stdout);
};

await read();
