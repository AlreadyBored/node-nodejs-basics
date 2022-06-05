export const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = args.reduce((prev, current, idx, arr) => 
        current.startsWith('--') ? [...prev, `${current.replace('--', '')} is ${arr[++idx]}`] : prev
    , []);
    console.log(result.join(', '));
};

parseArgs();
