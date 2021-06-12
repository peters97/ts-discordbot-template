import {
    Discord,
    On,
    Client,
    Command,
    CommandMessage,
} from "@typeit/discord";

export abstract class HutsCommand{
    @Command("huts")
    ping(message: CommandMessage) {
        message.channel.send('huts')
    }
}


