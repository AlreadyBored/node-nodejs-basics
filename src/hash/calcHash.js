import fs from 'fs';
import crypto from 'crypto';

const path = "./src/hash/files/fileToCalculateHashFor.txt";

var GetMessage = (path) => {
    if(!fs.existsSync(path))
        throw new Error("Can't find a file!!!");
    const result = fs.readFileSync(path) + "";
    
    return result;
}

async function translate(string) {
    const encoder = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest("SHA-256", encoder);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((bytes) => bytes.toString(16).padStart(2, "0"))
        .join("");
    
    return hashHex;
}

const calculateHash = async () => {
    translate(GetMessage(path)).then((hex) => console.log(hex));
};

await calculateHash();
