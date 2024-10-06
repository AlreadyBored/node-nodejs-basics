import { Transform } from 'stream';
import os from 'os';

const { stdin, stdout } = process;

const reverseStream = new Transform({
    transform (data, encoding, callback) {
        const reversedData = data.toString().split("").reverse().join("");
        this.push(reversedData);
        callback();
    }
});

const transform = async () => {
    stdout.write('Hi! Please, enter text: (you can type "exit" to exit)\n')
    stdin.on("data", (data) => {
        if (data.toString().includes('exit')) {
            stdout.write('Goodbye!' + os.EOL);
            process.exit();
        };

        reverseStream.write(data);
    });

    reverseStream.on('data', (chunk) => {
        stdout.write(chunk + os.EOL);
      });
    process.on('SIGINT', () => {
        stdout.write('Goodbye!');
        process.exit();
    })
};

await transform();