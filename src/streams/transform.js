import { Transform } from 'node:stream';

export const transform = async () => {
    function reverseString(str) {
        const splitString = str.split("");
        const reverseArray = splitString.reverse(); 
        const joinArray = reverseArray.join(""); 
        return joinArray; 
    }

    const myTransform = new Transform({
        writableObjectMode: true,
      
        transform(chunk, encoding, callback) {
            callback(null, reverseString( chunk.toString() ));
        },
    });
      

    process.stdin.pipe(myTransform).pipe(process.stdout);

};

transform();