import {createHash} from 'crypto';
import {readFile} from 'fs';
const calculateHash = async () => {

    readFile('./files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(createHash('sha256').update(data).digest('hex'));
    });

};

export default calculateHash();