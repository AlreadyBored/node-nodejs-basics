
import {createReadStream} from 'fs';

const read = async () => {
    const reading = createReadStream('./files/fileToRead.txt')
    const res = [];
    reading.on('data',(chunk)=>{
        console.log(chunk.toString());
        res.push( chunk );
    })
    reading.on("end",() => {
        console.log('end')
        process.stdout.write( Buffer.concat(res).toString() );

    })
};
export default read();