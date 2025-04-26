import process from 'process';

const parseArgs = () => {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        const fixedName = args[i].startsWith('--') ? args[i].slice(2) : args[i];
        console.log(`${fixedName} is ${args[i + 1]}`);
    }
};

parseArgs();
