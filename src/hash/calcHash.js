import { createReadStream } from 'fs';
import { stdout } from 'process';
import { createHash } from 'crypto';
import path from 'path';
import {getDir} from '../utils/getDir.js'

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(filename);
    
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();