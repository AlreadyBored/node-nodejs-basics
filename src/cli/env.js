export const parseEnv = () => {
    const variables = process.env;

    for (const property in variables) {
        if (property.includes('RSS')) {
            console.log(`${property}=${variables[property]}`);
        }
    }
};

parseEnv();
