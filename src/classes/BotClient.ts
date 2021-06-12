import { Client } from "@typeit/discord";

export class BotClient {
    static async boot() {

        const client = new Client({
            classes: [
                `${__dirname}/Bot.ts`,
                `${__dirname}/Bot.js`
            ],
            silent: false,
            variablesChar: ":"
        });

        await client.login(process.env.DISCORD_API_TOKEN);
    }
}
