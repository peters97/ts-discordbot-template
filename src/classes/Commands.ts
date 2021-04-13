import {
    Discord,
    On,
    Client,
    Command,
    CommandMessage,
    CommandNotFound
} from "@typeit/discord";

@Discord("!")
abstract class Commands {
    @Command("ping")
    private ping(message: CommandMessage) {
        message.reply('pong');
    }

    @Command("strava")
    private strava(message: CommandMessage) {
        message.reply('pong');
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {
        message.reply('Command not found')
    }
}
