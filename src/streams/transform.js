import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import { Duplex } from 'stream';
const stdout = process.stdout;
const stdin = process.stdin;
const rl = readline.createInterface(process.stdin, process.stdout);


export const transform = async () => {
    // Write your code here 
    function reverseString(str) {
        console.log(str.split("").reverse().join(""));
        return str.split("").reverse().join("");
    }

    const input = rl.question('Enter text to reverse: ', (text) => {
        console.log(reverseString(text));
    });

    rl.on("line", function (line) {
        stdout.write(reverseString(data));
        if (line === "exit") {
            rl.close();
            stdout.write(`Good luck,\nexit with code: ${code}`);
            process.exit(0);
        }

    }).on("close", function () {
        process.exit(0);
    });

    stdin.on("data", (data) => {
        stdout.write(reverseString(data));
        console.log(reverseString(data));
    });
    process.on("exit", (code) => {
        rl.close();
        stdout.write(`Good luck,\nexit with code: ${code}`);
        process.exit(0);

    });
}
transform();

//     const inoutStream = new Duplex({
//         write() {
//             rl.on("line", function (line) {
//                 if (line === "exit") {
//                     rl.close();
//                     stdout.write(`Good luck,\nexit with code: ${code}`);
//                     process.exit(0);
//                 }
//             }).on("close", function () {
//                 process.exit(0);
//             });
//         },

//         read() {
//             stdin.on("data", (data) => {
//                 stdout.write(reverseString(data.toString()));
//             });
//         }
//     });


//     process.stdin.pipe(inoutStream).pipe(process.stdout);
// };
// transform();