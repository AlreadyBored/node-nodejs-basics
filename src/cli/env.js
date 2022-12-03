const { env, stdout } = process;

const parseEnv = () => {
    const envKeys = Object.keys(env);

    const markedKeys = envKeys.filter(value => value.startsWith('RSS_')).map(key => {
        return `${key}=${env[key]}`;
    }).join(';');

    stdout.write(markedKeys + '\n');
    process.exit();
};

parseEnv();
