'use strict'

import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const fName = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)), `files`, `fileToWrite.txt`)

export const write = async () => {
    const { stdin } = process
    const fileWStream = fs.createWriteStream(fName)

    stdin.pipe(fileWStream)
    stdin.on(`end`, () => {
        fileWStream.end()
    })

    // Write your code here 
};