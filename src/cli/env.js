const parseEnv = () => {
    const envProps = Object.entries(process.env);
    if (envProps) {
        const resultString = envProps
            .filter(([propName, _]) => propName.startsWith('RSS_'))
            .map(([propName, propValue]) => `${propName}=${propValue}`)
            .join(';');
        console.log(resultString);
    } else {
        throw new Error('No environment props were found');
    }
};

parseEnv();