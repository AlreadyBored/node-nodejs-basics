import { writeFile } from 'fs/promises'
import { throwError } from './error.js'

const create = async () => {
    try {
        await writeFile('./files/fresh.txt', 'I am fresh and young', { flag: 'wx'})
    } catch (error) {
        throwError()
    }
};

await create();