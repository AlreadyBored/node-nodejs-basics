import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const read = async () => {
    const targetFile = `${dirname(fileURLToPath(import.meta.url))}/files/fileToRead.txt`;

    const readAbleStream = await fs.createReadStream(targetFile)
    readAbleStream.pipe(process.stdout)
};

await read();