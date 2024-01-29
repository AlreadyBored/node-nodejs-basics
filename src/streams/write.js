import { createWriteStream } from 'node:fs';
import path from 'node:path';

const write = async () => {
    const filePath = path.join(
        process.cwd(),
        'src/streams/files/fileToWrite.txt'
    );

    let writer = createWriteStream(filePath, { autoClose: true });
    process.stdin.on('data', (data) => {
        writer.write(data);
    });
};

await write();
