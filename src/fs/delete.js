import { unlink } from 'fs/promises'
import { throwError } from './error.js'

const remove = async () => {
    const fileName = 'fileToRemove.txt'
    try {
        await unlink(`./files/${fileName}`)
    } catch(error) {
        throwError()
    }
};

await remove();