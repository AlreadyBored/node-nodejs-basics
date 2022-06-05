import { env } from 'node:process';
// for test bash: RSS_name1=value1 RSS_name2=value2 node src/cli/env
// for test powershell: $env:RSS_name1="value1"; $env:RSS_name2="value2"; node src/cli/env

export const parseEnv = () => {
    let str = '';
    Object.keys(env).forEach(el => {
        if (el.startsWith('RSS_')) {
            str += el + '=' + env[el] + '; ';
        }
    });
    console.log(str);

};
parseEnv();
