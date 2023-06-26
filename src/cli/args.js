const getArgsMap = () => {
    const props = process.argv.filter(arg => arg.startsWith('--'));

    const argsMap = new Map();
    props.forEach(prop => {
        const sp = prop.split('=');
        const key = sp[0].slice(2)
        const value = sp[1];
        argsMap.set(key, value);
    });

    return argsMap;
};

export {getArgsMap}
