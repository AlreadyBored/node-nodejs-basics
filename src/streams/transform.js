import { stdin, stdout } from 'process';
const transform = async () => {
    // Write your code here 
    stdin.on('data', (data) => {
        stdout.write(data.toString().split('').reverse().join(''));
        stdout.write('\n');
    });

};

await transform();