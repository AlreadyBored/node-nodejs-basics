import fs from 'fs';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const write = async () => {
    const stream = await fs.createWriteStream(path.join(__dirname, '/files/fileToWrite.txt'));
    await process.stdin.pipe(stream)
};

// write();