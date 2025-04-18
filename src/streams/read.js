import fs from 'fs';
import process from 'process';
const read = async () => {
    const rs = fs.createReadStream('src/streams/files/fileToRead.txt')
    rs.setEncoding('UTF8');
    rs.pipe(process.stdout);
};

await read();