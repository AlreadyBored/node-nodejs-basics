import { createWriteStream } from 'node:fs';
import { dirname ,join} from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const write = async () => {
    const targetFile = join(__dirname,'/files/fileToWrite.txt');
    const stream = createWriteStream(targetFile);

    process.stdin.on("data", data => {
        data = data.toString();
        stream.write(data);
    });
};

await write();