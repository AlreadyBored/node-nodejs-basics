import {createWriteStream} from 'fs';

const write = async () => {
    const writing = createWriteStream("./files/fileToWrite.txt");
    process.stdin.on("data", ( dat )=>{
        console.log(dat)
        writing.write( dat.toString() )
    })
};

export default write();