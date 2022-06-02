import { stdin, stdout } from "process";
import { Transform } from "stream";

class TStream extends Transform {
  constructor(options) {
    super(options);   
  };
  _transform(chunk, _, cb) {
    stdout.write("\n\n\t\t\t\t\tOOPS!!! TRAH-TIBIDOH!!!\n\n");
    cb(null, chunk.toString().split("").reverse().join(""));
    stdout.write("\n");  
  };
}

export const transform = async () => {
    stdout.write(`\t\t\t-----A LITTLE BIT MAGIC WITH THE TRANSFORM STREAM-----\n`);
    stdout.write(`\t\t\tIf you want to see magic, please, enter a word and then press ENTER.\n`);
    stdout.write(`\t\t\tIf you do not like magic, please, press CTRL + C.\n`);
    const stream = new TStream();
    stdin.pipe(stream).pipe(stdout); 
};

transform();