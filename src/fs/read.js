import fs from 'fs'

const source = "./src/fs/files/fileToRead.txt"

export const read = async () => {
    fs.readFile(source, 'utf8', function (err, data) {
        if (err) {
            try { 
                throw new Error('FS operation failed')
            } catch (err) {
                console.error(err.message)
            }
        } else {
            console.log(data);
        }
    })
};

await read();