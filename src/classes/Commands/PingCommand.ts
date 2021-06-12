import {
    Discord,
    On,
    Client,
    Command,
    CommandMessage, CommandNotFound,
} from "@typeit/discord";

export abstract class PingCommand{
    @Command("ping")
    ping(message: CommandMessage) {
        message.channel.send('pong bitch')
    }
}


