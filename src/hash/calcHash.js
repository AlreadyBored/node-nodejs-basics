import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');
import path from 'node:path';

const calculateHash = async () => {
    const hash = createHash('sha256');
    const file = path.join(
        process.cwd(),
        'src/hash/files/fileToCalculateHashFor.txt'
    );

    const myReadStream = createReadStream(file);
    let content = '';

    myReadStream.on('data', function (chunk) {
        content += chunk;
    });

    myReadStream.on('error', function (err) {
        console.error(err);
    });

    myReadStream.on('end', function () {
        const data = hash.update(content, 'utf-8');
        console.log(data.digest('hex'));
    });
};

await calculateHash();
