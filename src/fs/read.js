import fs from 'fs'

const read = async () => {
    const filePath = new URL('files/fileToRead.txt', import.meta.url)

    try {
        const content = await fs.promises.readFile(filePath, { encoding: 'utf8' }).catch(err => {
            throw new Error('FS operation failed') 
        });

        console.log(content)
    } catch (err) {
        console.error(err)
    }
};

await read();