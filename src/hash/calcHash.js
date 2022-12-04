import crypto from 'crypto';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256').update('./files/fileToCalculateHashFor.txt').digest('hex');
    console.log('Hash as hex:', hash); 
};

await calculateHash();