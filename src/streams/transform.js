import fs from "fs";
import path from "path";

export const transform = async () => {
    const { stdin } = process;
    let dataString;
    stdin.on('data', data => {
        dataString = data.toString();
        console.log(dataString);
        process.exit();
      });
    
    const __dirname = path.resolve();
    const filename = path.join(__dirname, "files/fileToWrite.txt");

    const output = fs.createWriteStream(filename);

    output.on('end', function() {
        output.write(dataString);
    });
};

transform();