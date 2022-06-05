import { argv } from 'process'

const PREFIX = 'RSS_';

export const parseEnv = () => {
    const properArgs = argv.filter(arg => arg.startsWith(PREFIX));

    for (const arg of properArgs) {
        console.log(arg);
    }
};
