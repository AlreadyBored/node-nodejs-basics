import fs from 'fs'

export const read = async () => {
  try {
    const stream = fs.createReadStream("./files/fileToRead.txt");
    stream.on("data", (chunk) => {
        stdout.write(chunk);
    });
  } catch (err){
      throw new Error('Error')
  }
};