import crypto from 'crypto';
import fs from 'fs';
import stream from 'stream';

const calculateHash = async () => {
    // Write your code here 
    const data = fs.createReadStream('./src/hash/files/fileToCalculateHashFor.txt')//, 'utf8', (err, content) => {
    stream.promises.pipeline(
        data,
        crypto.createHash('sha256').setEncoding('hex'),
        async (source) => {
            console.log((await source.toArray()).join('; '));
          }
    );
    //to chek if correct
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, content) => {
        if (err) throw new Error('FS operation failed');
        const hash = crypto.createHash('SHA256').update(content).digest('hex');
        console.log(hash, 'for checking')
    })
};

await calculateHash();