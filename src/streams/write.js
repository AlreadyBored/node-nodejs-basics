import {createWriteStream} from 'fs'

const write = async () => {
    const output = createWriteStream('./src/streams/files/fileToWrite.txt')
    process.stdout.write('type exit if u want to quit\n')
    process.stdin.on('data', chunk => {
        output.write(chunk)
        if(chunk.toString() === "exit\n")
            process.exit(1) 
    })
    process.stdin.on('error', error => console.log('ERROR', error.message));
}


await write();