'use strict'

const { opendir } = require('fs/promises')
const path = require('path')

const dName = path.resolve(__dirname, `files`)
const errorText = `FS operation failed`

export const list = async () => {
    // Write your code here 
    const output = []

    let dirHandle
    try {
        dirHandle = await opendir(dName)
    } catch (e) {
        if (e.code === `ENOENT`) {
            throw new Error(errorText)
        }
    }

    let dirEntry
    while (dirEntry = await dirHandle.read()) {
        output.push(dirEntry.name)
    }

    console.log(output)
};
