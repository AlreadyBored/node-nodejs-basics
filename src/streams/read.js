'use strict'

import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const fName = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)), `files`, `fileToRead.txt`)

export const read = async () => {
    fs.createReadStream(fName).pipe(process.stdout)
};
