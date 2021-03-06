module.exports = { name: 'ranks', description: 'Shows a list of selected roles and their member counts', usage: ' ', modonly: true, async run(client, message, args) {

    // Sets roles
    let adminRole = message.guild.roles.find(role => role.name === "Admin");
    let modRole = message.guild.roles.find(role => role.name === "Moderator");
    let botRole = message.guild.roles.find(role => role.name === "ATM");
    let consRole = message.guild.roles.find(role => role.name === "Consultant");
    let rMarioRole = message.guild.roles.find(role => role.name === "r/Mario Staff");
    let marioWikiRole = message.guild.roles.find(role => role.name === "MarioWiki Staff");
    let beanBeanRole = message.guild.roles.find(role => role.name === "Beanbean Ambassador");
    let roboBBRole = message.guild.roles.find(role => role.name === "Robo Brick Block");
    let BBRole = message.guild.roles.find(role => role.name === "Brick Block");
    let lemonRole = message.guild.roles.find(role => role.name === "Lemon Grabber");
    let troubleRole = message.guild.roles.find(role => role.name === "Life Shroom");
    let artRole = message.guild.roles.find(role => role.name === "Art Helper");
    let devRole = message.guild.roles.find(role => role.name === "Developer");
    let faction1Role = message.guild.roles.find(role => role.name === "Petal Plumber");
    let faction2Role = message.guild.roles.find(role => role.name === "Fearful Florist");
    let unspoilRole = message.guild.roles.find(role => role.name === "Unspoiled");
    let smashRole = message.guild.roles.find(role => role.name === "Frequent Fighter");
    let verifiedRole = message.guild.roles.find(role => role.name === "Verified");

    // Displays long stupid message that I had to type up
    message.channel.send(`\`\`\`\nAdmin: ${adminRole.members.size} members\nModerator: ${modRole.members.size} members\nATM: ${botRole.members.size} bots\nConsultant: ${consRole.members.size} members\nr/Mario Staff: ${rMarioRole.members.size} members\nMarioWiki Staff: ${marioWikiRole.members.size} members\nBeanbean Ambassador: ${beanBeanRole.members.size} members\nRobo Brick Block: ${roboBBRole.members.size} members\nBrick Block: ${BBRole.members.size} members\nLemon Grabber: ${lemonRole.members.size} members\nLife Shroom: ${troubleRole.members.size} members\nArt Helper: ${artRole.members.size} members\nDeveloper: ${devRole.members.size} members\nPetal Plumber: ${faction1Role.members.size} members\nFearful Florist: ${faction2Role.members.size}\nUnspoiled: ${unspoilRole.members.size} members\nFrequent Fighter: ${smashRole.members.size} members\nVerified: ${verifiedRole.members.size} members\`\`\``);
}};