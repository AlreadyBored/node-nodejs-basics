import process from 'process'
const parseArgs = () => {
    // Write your code here
    const arg = process.argv;
    let count = 0;
    for (let i = 0; i < arg.length; i +=1) {
        if (arg[i].startsWith('--')) {
            count += 1;
            if (count > 1) {
                console.log('prop' + count + 'Name is ', arg[i]);
            } else {
                console.log('propName is ', arg[i]);
            }
        }
    }
};

parseArgs();