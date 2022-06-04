import * as crypto from 'crypto';
import fs from "fs/promises";
export const calculateHash = async () => {
    const hash = crypto.createHash('sha256')
    fs.readFile('hash/files/fileToCalculateHashFor.txt','utf8')
        .then((text)=>{
            const data = hash.update(text, 'utf-8');
            const data_hex = data.digest('hex')
            console.log(data_hex)
        })

};
calculateHash()