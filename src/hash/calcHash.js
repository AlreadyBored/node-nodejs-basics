import crypto from 'crypto';

const calculateHash = async () => {
  console.log(crypto.createHash('sha256').update('./hash/files/fileToCalculateHashFor.txt').digest('hex'))
};

await calculateHash();