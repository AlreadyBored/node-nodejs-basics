import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url';
import crypto from 'crypto'

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)

const pathToFileGetHash=path.join(dirName,'files','fileToCalculateHashFor.txt')

const calculateHash=async () => {
    try {

        const readFileToBuffer=fs.readFileSync(pathToFileGetHash)
        const hashSum=crypto.createHash('sha256')
        hashSum.update(readFileToBuffer)

        const hex=hashSum.digest('hex')
        
        console.log('sha256 hash in hex: ', hex)

    } catch(error) {
        throw new Error('Create HASH operation failed!')
    }
};

await calculateHash();