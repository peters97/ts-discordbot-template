import { Client } from "@typeit/discord";


async function start() {
    require('dotenv').config()

    const client = new Client({
        classes: [
            `${__dirname}/classes/*.ts`,
            `${__dirname}/classes/*.js`
        ],
        silent: false,
        variablesChar: ":"
    });

    await client.login(process.env.DISCORD_API_TOKEN);
}

start();

