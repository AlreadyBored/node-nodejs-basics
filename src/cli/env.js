const parseEnv = () => {
    let output = '';

    for(const env in process.env) {
        if (!env.startsWith('RSS_')) {
            continue;
        }

        output += `${env}=${process.env[env]}; `;
    }

    console.log(
        output.replace(/;\s$/, '')
    );
};

parseEnv();