import { readdir } from 'fs/promises'
import { throwError } from './error.js'

const list = async () => {
    try {
        const PATH = './filess'
        
        const files = await readdir(PATH)
        console.log(files)
        // for(const file of files) {
        //     console.log(file)
        // }
    } catch(error) {
        throwError()
    }
};

await list();