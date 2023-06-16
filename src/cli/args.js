import { stdout } from 'process'; 

const parseArgs = () => {
    const args = process.argv;
    for (let i = 2; i < args.length; i++) {
        if (args[i].startsWith('--')) {
            stdout.write(`${args[i]} is ${args[i + 1]}, `);
        }
    }
};

parseArgs();