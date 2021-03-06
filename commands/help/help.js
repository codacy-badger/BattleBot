const Discord = require("discord.js");

module.exports = { name: 'help', description: 'Gives information on the bot\'s commands!', aliases: ['h'], usage: '[command name / category]', args: '[command name / category] => Any of the command names or categories listed in the help command', modonly: false, async run(client, message, args) {

    // Setting up stuff for dynamic help
    const data = [];
    const commands = client.commands;
    const specify = args[0];
    const command = commands.get(specify) || commands.find(c => c.aliases && c.aliases.includes(specify));

    // Setting up embed constants
    const helpEmbed = new Discord.RichEmbed()
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp()
    .setAuthor(message.member.user.tag, message.author.avatarURL)
    .setColor("#4199c2")
    .setFooter(`Created and Maintained by Phoenix#0408 | ${client.version}`, client.user.displayAvatarURL)
    
    if (!specify) {
        // Normal help
        helpEmbed.setTitle("BattleBot Help")
        .setDescription("Your guide to all of BattleBot's commands! Be sure to ping or DM Phoenix#0408 with any questions, comments, or feedback!")
        .addField('Categories:', `Use \`${client.config.prefix}help [category]\` to see all the commands for that category!`)
        .addField('Battles', 'Commands related to Faction Battles')
        .addField('Fun', 'Just for fun')
        .addField('Info', 'Information commands')
        .addField('Roles', 'Commands for distributing roles')
        .addField('Moderation', 'Moderation commands')
        .addField('Misc.', 'Commands that don\'t really fit anywhere else');
        message.channel.send(helpEmbed);

    } else switch (specify) {
        case 'battles': case 'battle':
            helpEmbed.setTitle('Battlebot Help: Battles')
            .setDescription(`All the Faction Battle commands! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}marigolds`, `${commands.get('marigolds').description}`)
            .addField(`${client.config.prefix}lilies`, `${commands.get('lilies').description}`)
            .addField(`${client.config.prefix}results [year] [month]`, `${commands.get('results').description}`)
            .addField(`${client.config.prefix}factions`, `${commands.get('factions').description}`)
            .addField(`${client.config.prefix}1ups [faction] [operation] [number]`, `${commands.get('1ups').description}`)
            .addField(`${client.config.prefix}clear [database]`, `${commands.get('clear').description}`);
            message.channel.send(helpEmbed);
            break;
        case 'fun':
            helpEmbed.setTitle('Battlebot Help: Fun')
            .setDescription(`All the Fun/Random commands! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}8ball [Question]`, `${commands.get('8ball').description}`)
            .addField(`${client.config.prefix}ascii [Text]`, `${commands.get('ascii').description}`)
            .addField(`${client.config.prefix}slots`, `${commands.get('slots').description}`);
            message.channel.send(helpEmbed);
            break;
        case 'info': case 'information':
            helpEmbed.setTitle('Battlebot Help: Info')
            .setDescription(`All the Information commands! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}botinfo`, `${commands.get('botinfo').description}`)
            .addField(`${client.config.prefix}serverinfo`, `${commands.get('serverinfo').description}`)
            .addField(`${client.config.prefix}userinfo [@User]`, `${commands.get('userinfo').description}`)
            .addField(`${client.config.prefix}changelog`, `${commands.get('changelog').description}`);
            message.channel.send(helpEmbed);
            break;
        case 'moderation': case 'mod':
            helpEmbed.setTitle('Battlebot Help: Moderation')
            .setDescription(`All the Moderation commands! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}ban [@User] [reason]`, `${commands.get('ban').description}`)
            .addField(`${client.config.prefix}kick [@User] [reason]`, `${commands.get('kick').description}`)
            .addField(`${client.config.prefix}mute [@User]`, `${commands.get('mute').description}`)
            .addField(`${client.config.prefix}purge [Number 2-100] [@User]`, `${commands.get('purge').description}`)
            .addField(`${client.config.prefix}blacklist [Word/Phrase/Link]`, `${commands.get('blacklist').description}`);
            message.channel.send(helpEmbed);
            break;
        case 'misc': case 'misc.': case 'miscellaneous':
            helpEmbed.setTitle('Battlebot Help: Miscellaneous')
            .setDescription(`All the commands that don\'t fit in any other category! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}ping`, `${commands.get('ping').description}`)
            .addField(`${client.config.prefix}prefix [New prefix]`, `${commands.get('prefix').description}`)
            .addField(`${client.config.prefix}setnickname [New nickname]`, `${commands.get('setnickname').description}`)
            .addField(`${client.config.prefix}setavatar [Image]`, `${commands.get('setavatar').description}`)
            .addField(`${client.config.prefix}ranks`, `${commands.get('ranks').description}`)
            .addField(`${client.config.prefix}poll [Question]`, `${commands.get('poll').description}`);
            message.channel.send(helpEmbed);
            break;
        case 'role': case 'roles':
            helpEmbed.setTitle('Battlebot Help: Roles')
            .setDescription(`All the commands for distributing roles! Use \`${client.config.prefix}help [command name]\` to get more info on the specified command!`)
            .addField(`${client.config.prefix}marigolds`, `${commands.get('marigolds').description}`)
            .addField(`${client.config.prefix}lilies`, `${commands.get('lilies').description}`)
            .addField(`${client.config.prefix}crown [@User]`, `${commands.get('crown').description}`)
            .addField(`${client.config.prefix}smashbros`, `${commands.get('smashbros').description}`);
            message.channel.send(helpEmbed);
            break;
        default:
            // If above doesn't match args, display this
            if (!command) return message.reply('Please specify a proper command or category!');

            // Pushing the name of the command to the data array to be displayed later
            data.push(`**Command Name:** \n\`${command.name}\`\n`);

            // If the command has aliases, a description, or a usage, push that to the data array
            if (command.aliases) data.push(`**Aliases:** \n\`${command.aliases.join(', ')}\`\n`);
            if (command.description) data.push(`**Description:** \n\`${command.description}\`\n`);
            if (command.usage) data.push(`**Usage:** \n\`${client.config.prefix}${command.name} ${command.usage}\`\n`);
            if (command.args) data.push(`**Accepted Arguments:** \n\`${command.args}\`\n`);
            if (command.modonly === true) data.push('\n**Only Executable By Those With The Moderator Role!**');
            
            message.channel.send(data, {split: true});
            break;
    }
}};