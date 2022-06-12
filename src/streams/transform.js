import {Transform,pipeline} from 'stream';
import {EOL} from 'os';

export const transform = async () => {
    const revert = new Transform({
        transform(chunk,encoding,callback){
            callback(null,chunk.toString().replace(EOL,'').split('').reverse().join('')+EOL)
        },
    })
    pipeline(
        process.stdin,
        revert,
        process.stdout,
        (err)=>{
            //...
        }
    )
    console.log('Write enything to console...\n');

};
transform();