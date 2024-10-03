import { writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { resolve } from 'path'


const create = async () => {
    try { 
        const text = 'I am fresh and young'
        if(existsSync('files/fresh.txt')){
            throw Error('FS operation failed')
        }
        await writeFile(
            resolve(process.env.PWD, 'files', 'fresh.txt'), 
            text, 
            'utf8'
        )
    } catch(err) {
        throw err
    }
};

await create();