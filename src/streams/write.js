const path = require('path')

const  fs = require('fs');

// недоделано
export const write = async () => {
    // Write your code here


    const file =  path.join(__dirname, 'files', 'fileToWrite.txt')
    const stream = fs.createWriteStream(file, 'utf-8');

    process.stdin.on('data', (data) => {
        stream.write(data)
    })

}

// write()