'use strict'

const crypto = require('crypto')
const fsPromises = require('fs/promises')
const path = require('path')

const fName = path.resolve(__dirname, `files`,
    `fileToCalculateHashFor.txt`)

export const calculateHash = async () => {
    const buf = await fsPromises.readFile(fName)
    const hashObj = crypto.createHash('sha256')

    hashObj.update(buf)

    return hashObj.digest('hex')

    // Write your code here 
};
