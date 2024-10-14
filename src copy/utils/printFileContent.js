import { createReadStream } from 'node:fs';
import { access } from 'fs/promises'
import path from 'node:path'

export const printFileContent = async (currentPath, filepath) => {
    try {
        const absfilepath = path.resolve(currentPath, filepath);
        await access(absfilepath)
        const filecontent = createReadStream(absfilepath)
        const promise = new Promise((resolve) => {
            filecontent.on('data', (chunk) => {
                console.log(chunk.toString())
            })
            filecontent.on('close', () => {
                resolve();
            })
        })
        
        await promise;

        filecontent.destroy();
        
    } catch(e) {
        console.error(e)
    }
}