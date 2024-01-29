import {env} from 'node:process'


const parseEnv = () => {
    const formattedEnvs = Object.entries(env)
                            .filter(entry => entry[0].includes('RSS'))
                            .map(item => `${item[0]}=${item[1]}`)
                            .join('; ')
    console.log(formattedEnvs)
};

parseEnv();