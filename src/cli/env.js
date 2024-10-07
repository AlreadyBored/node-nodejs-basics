import { env} from 'node:process';

const PREFIX = 'RSS_';

const parseEnv = () => {
    const allVars = Object.entries(env).filter(([key]) => key.startsWith(PREFIX));
    const formatedVars = allVars.map(([key, value]) => `${key}=${value}`).join('; ');

    console.log(formatedVars);
};

parseEnv();