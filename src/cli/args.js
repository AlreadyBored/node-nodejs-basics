export const parseArgs = () => {
    let args = process.argv.slice(2),
        responseArr = [];

    args.map((item, index) => {
        if(item.startsWith('--')){
            let nextElement = args[index+1];
            let value = typeof nextElement === 'undefined' || nextElement.startsWith('--') ? 'empty' : args[index+1];
            responseArr.push(item.substring(2) + ' value is ' + value);
        }
    });

    console.log(responseArr.join(', '));
};

parseArgs();