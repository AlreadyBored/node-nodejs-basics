import path from 'node:path'
import { access,stat } from 'fs/promises'
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export const printHash = async (currentPath, filepath) => {
    const absfilepath = path.resolve(currentPath, filepath);

    const isCreated = await access(absfilepath).then(() => true).catch(() => false);
    
    if (!isCreated) {
        console.error("File doesn't exists")
        return;
    }

    const stats = await stat(absfilepath)

    if (stats.isDirectory()) {
        console.error('It is directory')
        return
    }

    const promise = new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const filecontent = createReadStream(absfilepath)
        filecontent.on('error', reject);
        filecontent.on('data', chunk => hash.update(chunk));
        filecontent.on('end', () => {
            resolve(hash.digest('hex'))
            filecontent.destroy();
        })
    })
    
    try {
        const hash = await promise;
        console.log(`Hash is - ${hash}`)
    } catch(_) {
        console.error('Cannot calculate hash')
    }

    // filecontent.destroy();

    // console.log(hash.setEncoding('hex'))
}