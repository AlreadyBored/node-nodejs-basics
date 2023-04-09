import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';

const fileName=fileURLToPath(import.meta.url);

const dirName=path.dirname(fileName);

const pathToFile=path.join(dirName,'files','fresh.txt')

const content='I am fresh and young'

const create=async () => {
    if(fs.existsSync(pathToFile)) {throw new Error('FS operation failed')}

    fs.writeFile(pathToFile, content, 'utf-8', (error) => {
        if(error) {console.error(error)}
    })

    console.log('File created successfully!')
};

await create();