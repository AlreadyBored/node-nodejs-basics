import process from 'node:process';

const parseArgs = () => {
    process.argv.
        forEach((item, index, array) => {
            if(item.startsWith('--')) {
                console.log(`${item.slice(2)} is ${array[index+1]}`);
            }
        });
};

parseArgs();