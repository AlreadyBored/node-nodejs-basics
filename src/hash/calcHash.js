import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const __dirname = import.meta.dirname;
const folderName = 'files';
const fileName = 'fileToCalculateHashFor.txt';
const filePath = path.join(__dirname, folderName, fileName)

const calculateFileHash = async () => {
    try {
        const hash = createHash('sha256');
        const stream = createReadStream(filePath, { encoding: 'utf8' });

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            const fileHash = hash.digest('hex');
            
            console.log(`SHA256 Hash ${fileHash}`);
        });

        stream.on('error', () => {
            throw new Error('FS operation failed')
        });
    } catch (error) {
        throw new Error(error);
    }
};

await calculateFileHash()
