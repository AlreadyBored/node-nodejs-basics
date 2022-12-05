import fs from 'fs';

const calculateHash = async () => {
  const hashSum = crypto.createHash('sha256');
  fs.readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      hashSum.update(data);
      const hex = hashSum.digest('hex');

      console.log(hex);
    }
  });
};

await calculateHash();
