import {writeFile} from 'node:fs/promises';

const DIR       = "./src/fs/files/"
const MSG       = 'I am fresh and young'
const FILENAME  = 'fresh.txt'
const ERRORMSG  = 'FS operation failed'

const create = async () => {
    try{
        await writeFile(DIR + FILENAME, MSG, {flag : "ax+"})
    }catch{
        throw ERRORMSG
    }
}
        


await create();