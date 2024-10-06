import path from "path";
import { createWriteStream} from 'fs';
const write = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToWrite.txt');
    const writeStream = createWriteStream(path.resolve(filePath), 'utf-8');
    process.stdin.pipe(writeStream);
};
await write();
