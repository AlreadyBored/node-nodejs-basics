import * as fs from "fs";

const create = async () => {
    // Write your code here
    const filePath = './files/fresh.txt'
    const fileContent = 'I am fresh and young'
    const fileExistsError = 'FS operation failed'

    // Check if file exists and if so fs.access throws an error
    try {
        await fs.promises.access(filePath, fs.constants.F_OK)
        throw new Error(fileExistsError)
    } catch (e) {
        if (e.message === fileExistsError) {
            throw e
        }
        // If file does not exist then create it
        await fs.promises.appendFile(filePath, fileContent)
        console.log('File created Successfully')
    }

};

await create();