export const parseEnv = () => {
    const env_vars = process.env;
    let output = "";
    Object.keys(env_vars).forEach(key => {
        if (key.startsWith("RSS_")) {
            output+=`${key}=${env_vars[key]}; `;
        }
    })
    console.log(output);
};

parseEnv();
