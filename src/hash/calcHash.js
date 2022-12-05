import fsPromises from "fs/promises"
import crypto from 'crypto'

const source = "./src/hash/files/fileToCalculateHashFor.txt"

const calculateHash = async () => {
    try {
        let contents = await fsPromises.readFile(source, { encoding: 'utf8' });
        let contentsHash = crypto.createHash('sha256').update(contents)
        console.log(contentsHash.digest('hex'));
      } catch (err) {
        console.error(err.message);
      }
};

await calculateHash();