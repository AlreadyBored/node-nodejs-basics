import fs from "fs";
export const calculateHash = async () => {
   const text = await fs.readFileSync('./files/fileToCalculateHashFor.txt');
   const data = await Buffer.from(text, 'utf8');
   return data.toString('hex');
};
calculateHash();