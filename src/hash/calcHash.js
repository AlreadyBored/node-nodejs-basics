import {createHash} from 'crypto';
import {fileURLToPath} from "url";
import {createCorrectPath} from "../helper.js";

const calculateHash = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const file = createCorrectPath(_filename, 'files', 'fileToCalculateHashFor.txt');
    const hash = createHash('sha256')
    const hashedFile = hash.update(file).digest("hex");
    console.log(hashedFile)
};

await calculateHash();