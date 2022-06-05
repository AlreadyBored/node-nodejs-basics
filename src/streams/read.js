const path = require('path')

const  fs = require('fs');

// недоделано
export const read = async () => {
    // Write your code here


    const file =  path.join(__dirname, 'files', 'fileToRead.txt')
    const stream = fs.createReadStream(file, 'utf-8');

    stream.pipe(process.stdout)

}