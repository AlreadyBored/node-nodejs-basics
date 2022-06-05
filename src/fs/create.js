import * as fs from 'fs/promises'

const FS_ALREADY_EXIST = 'FS operation failed'

export const create = async () => {
    // Write your code here
    try {
        await fs.access("./src/fs/files/fresh.txt");
        throw new Error(FS_ALREADY_EXIST)
    } catch (error) {
        if (error.message === FS_ALREADY_EXIST) {
            throw error
        }
    }

    try {
        await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young')
    } catch (error) {
        console.error('there was an error:', error.message)
    }
};

await create();