import { copyFile, readdir, mkdir, access } from 'fs/promises'
import { throwError } from './error.js'

const copy = async () => {
    try {
        const PATH = './files', NEW_PATH = './files_copy'
        await access(PATH)

        await mkdir(NEW_PATH)
        // await access(NEW_PATH) // do not need because mkdir throw Error if it folder exist

        const files = await readdir(PATH)
        for(const file of files) {
            copyFile(`${PATH}/${file}`, `${NEW_PATH}/${file}`)
        }

    } catch(error) {
        throwError()
    }
};

await copy();
