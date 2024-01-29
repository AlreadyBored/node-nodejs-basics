import process from 'node:process';

const parseArgs = () => {
    const args = process.argv;
    for(let i=0; i+1<=args.length; i = i+2)
    console.log(args[i] + " is " + args[i+1])
};

parseArgs();