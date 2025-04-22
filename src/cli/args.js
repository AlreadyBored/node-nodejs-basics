const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, item, index, array) => (
        item.startsWith('--')
        ?  { ...acc, [item.slice(2)]: array[index + 1] }
        : acc
    ), {});

    const outputArgsArr = Object.entries(args)
        .map(([propName, value]) => `${propName} is ${value}`)
        .join(', ');

    console.log(outputArgsArr);
    // process.stdout.write(outputArgsArr + '\n');
};

parseArgs();