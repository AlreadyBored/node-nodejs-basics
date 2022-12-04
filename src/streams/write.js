import { createWriteStream } from "fs";
import { stdin } from "process";

import { getPath } from "../fs/utils/fs.js";

const write = async () => {
    const path = getPath("streams", "files", "fileToWrite.txt");
    const writableStream = createWriteStream(path, { encoding: "utf8" });

    stdin.pipe(writableStream);
};

await write();
