import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
const stdout = process.stdout;
const stdin = process.stdin;
const rl = readline.createInterface(process.stdin, process.stdout);
const __dirname = dirname(fileURLToPath(import.meta.url));


export const write = async () => {
    const filePath = path.join(__dirname, 'files/fileToWrite.txt');
    const input = rl.question('Enter text to write to file: ', (text) => {
        fs.writeFile(filePath, text, (err) => {
            if (err) {
                console.log('Error writing to file', err.message);
            } else {
                console.log('Successfully wrote to file');
            }
        });
    });
    rl.on("line", function (line) {
        if (line === "exit") {
            rl.close();
            stdout.write(`Good luck,\nexit with code: ${code}`);
            process.exit(0);
        }
    }).on("close", function () {
        process.exit(0);
    });
    stdin.on("data", (data) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) throw err;
        });
    });
    process.on("exit", (code) => {
        rl.close();
        stdout.write(`Good luck,\nexit with code: ${code}`);
        process.exit();

    });
}
write();