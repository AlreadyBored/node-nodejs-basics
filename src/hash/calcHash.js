import path from "node:path";
import * as crypto from "crypto";
import * as fs from "fs";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateFileHashAsync = async () => {
    const filePath = path.join(__dirname,'files','fileToCalculateHashFor.txt')

    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            resolve(hash.digest('hex'));
        });

        stream.on('error', (error) => {
            reject(error);
        });
    });
};

const calculateHash = async () => {
    try{
       const result = await calculateFileHashAsync()
        console.log(result)
    } catch (error){
        console.error(error.message)
    }
}

await calculateHash();
