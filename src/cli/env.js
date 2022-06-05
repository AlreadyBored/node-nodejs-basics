import { env } from 'node:process';

export const parseEnv = () => {
    // 2 test env
    env.RSS_test1 = 1;
    env.RSS_test2 = 'hello';

    Object.entries(env)
        .filter(([key, value]) => key.startsWith('RSS_'))
        .forEach(([key, value]) => console.log(`${key}=${value}`));
};

parseEnv();