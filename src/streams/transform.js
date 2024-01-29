import process from 'process';
import stream from 'stream';
import util from 'util';


var Transform = stream.Transform ||
    require("readable-stream").Transform;

function Upper (options) {
    
    if(!(this instanceof Upper)) {
        return new Upper(options);
    }
    
    Transform.call(this, options);
}

util.inherits(Upper, Transform);

Upper.prototype._transform = function (chunk, enc, cb) {
    var upperChunk = chunk.toString().toUpperCase();
    this.push(upperChunk);
    cb();
}

const transform = async () => {
    var upper = new Upper();
    
    process.stdin.setEncoding("utf8");
    process.stdin.on("readable", () => {
        var input = process.stdin.read();
        if (input !== null) {
            upper.pipe(process.stdout);
            upper.write(input);
            upper.end();
        }
    })
};

await transform();
