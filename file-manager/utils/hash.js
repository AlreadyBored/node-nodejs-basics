const {
  createHash,
} = await import('node:crypto');
import { createReadStream } from 'node:fs';
import path from 'node:path'



const hash = createHash('sha256');

export const calculateHash = async (dir,arg) => {
    let filePath = path.resolve(arg)
    const fileToRead = await createReadStream(filePath)
    await fileToRead.pipe(hash).setEncoding('hex').pipe(process.stdout)
};