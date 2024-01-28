import { readFileSync } from 'fs';
const calculateHash = async () => {
    const fileForReading = './files/fileToCalculateHashFor.txt';
    try {
        const message = readFileSync(fileForReading, 'utf8');
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        const hash = await crypto.subtle.digest("SHA-256", data);
        const uint8View = new Uint8Array(hash);
        console.log(uint8View);
    } catch (err) {
        console.error(err);
    }
};

await calculateHash();

/* implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt
 and logs it into console as hex using Streams API
 */
