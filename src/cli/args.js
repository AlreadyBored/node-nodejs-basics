const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, el, i, arr) => {
        if (i % 2) {
            const key = arr[i - 1].replace('--', '');
            acc[key] = el;
        } else {
            acc[el.replace('--', '')] = null;
        }

        return acc;
    }, {});

    const output = Object.entries(args)
        .map(el => el.join(' is '))
        .join(', ');

    console.log(output);
};

parseArgs();