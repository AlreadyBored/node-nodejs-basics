import * as fs from 'fs'
import * as crypto from 'crypto';

export const calculateHash = async () => {
    fs.readFile("files/fileToCalculateHashFor.txt", (err, data) => {
        if (err) {
            return console.log(err)
        }
        let hash = crypto.createHash('sha256').update(data).digest('hex')
        console.log(hash)
    }) 
};

calculateHash()