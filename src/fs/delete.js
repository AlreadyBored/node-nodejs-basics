'use strict'

const fsPromises = require('fs/promises')
const path = require('path')

const fName = path.resolve(__dirname, `files`, `fileToRemove.txt`)
const errorText = `FS operation failed`

export const remove = async () => {

    try {
        await fsPromises.unlink(fName)
    } catch (e) {
        if (e.code === `ENOENT`) {
            throw new Error(errorText)
        }
    }


};
