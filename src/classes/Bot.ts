import * as Path from "path";
import {
    Discord,
    CommandNotFound, CommandMessage
} from "@typeit/discord";

@Discord(process.env.COMMAND_PREFIX, {
    import: [
        Path.join(__dirname,  "Commands", "*.ts"),
        Path.join(__dirname,  "Commands", "*.js"),
    ]
})
export abstract class Bot {
    @CommandNotFound()
    notFoundA(command: CommandMessage) {
        command.reply("Command not found");
    }
}
