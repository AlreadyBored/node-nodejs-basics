import * as process from 'node:process';

const parseArgs = () => {
    const args = process.argv.slice(2);
    const results = {};

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];

        results[key] = value;
    }

    Object.entries(results).forEach(([key, value]) => console.log(`${key} is ${value}`));
};

parseArgs();