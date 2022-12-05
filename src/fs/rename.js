import fs from 'fs'
import fsPromises from 'fs/promises'

const old = "./src/fs/files/wrongFilename.txt"
const newF = "./src/fs/files/properFilename.md"

export const rename = async () => {
    fs.access(old, async function (err) {
        if (err) {
            try {
                throw new Error('FS operation failed')
            } catch (err) {
                console.error(err.message)
            }
        } else {
            fs.access(newF, async function (err) {
                if (err) {
                    await fsPromises.rename(old, newF);
                } else {
                    try {
                        throw new Error('FS operation failed')
                    } catch (err) {
                        console.error(err.message)
                    }
                }
            });
        }
    });
};


await rename();