import fsPromises from "fs/promises";
import path from "path";
import * as url from "url";
import crypto from "crypto";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    let readebleFilePath = path.resolve(__dirname, "./files", "fileToCalculateHashFor.txt");
    let fileData = await fsPromises.readFile(readebleFilePath, "utf-8");
    let hash = crypto.createHash("sha256", fileData).digest("hex");

    console.log(hash);
};

await calculateHash();