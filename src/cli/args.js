const parseArgs = () => {
    const props = process.argv.filter(arg => arg.startsWith('--'));

    const keyValue = props.map(prop => {
        const sp = prop.split('=');
        const key = sp[0].slice(2)
        const value = sp[1];
        return `${key} is ${value}`;
    });

    console.log(keyValue.join(', '))
};

parseArgs();
