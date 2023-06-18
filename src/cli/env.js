import process from "node:process";

const envNameStartsWith = "RSS_";

const parseEnv = () => {
    const env = Object.entries(process.env);

    const parsedEnv = env.reduce((acc, [key, value]) => {
        if (key.startsWith(envNameStartsWith)) {
            acc.push(`${key}=${value}`);
        }
        return acc;
    }, []);

    console.log(parsedEnv.join("; "));
};

parseEnv();
