export const parseEnv = () => {
    console.log(Object.entries(process.env)
        .filter(([k]) => k.slice(0, 4) === 'RSS_')
        .map(([k, v]) => `${k}=${v}`)
        .join('; ')
    )
};

// parseEnv();