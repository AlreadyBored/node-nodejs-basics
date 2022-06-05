import * as fs from 'fs';

export const read = async () => {
   fs.ReadStream("files/fileToRead.txt").on('data', function(d) {
       process.stdout.write(d.toString()+ " \r\n")
    })
};

read()