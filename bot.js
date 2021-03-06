
// Bot Version 1.1.3

// Standard importing modules and crap
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

// Defining client and config
const client = new Discord.Client();
const config = require("./config.json");

// Attaching the client to the config file so it can be used anywhere
client.config = config;

// Attaching the bot version to the client so it can be used anywhere
const version = 'v1.1.3';
client.version = version;

// Attaching both factions to the client so they can be used anywhere
const faction1 = 'Mario';
const faction2 = 'Luigi';
client.faction1 = faction1;
client.faction2 = faction2;

// Reading and doing stuff to make events work
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

// Setting up an Enmap for commands
client.commands = new Enmap();

// Reading and doing stuff to make commands work
fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/help/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/help/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/moderation/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/system/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/system/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/factions/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/factions/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/roles/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/roles/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

// Setting the blacklist                                     Link that crashes Discord clients used by the raiders Oakbrook Phil and Homer Simpson Gaming
let blacklisted = ['http://discord.amazingsexdating.com/', 'https://open.spotify.com/track/5HjEC3NlSzKsVKmqnhXrum?context=spotify%3Auser%%3Aplaylist%3A4PTJQnhzs5mo4wrKlTMlS4&si=RzHko2lIQMCSPDp0jubksghttps://open.spotify.com/track/5HjEC3NlSzKsVKmqnhXrum?context=spotify%3Auser%%3Aplaylist%3A4PTJQnhzs5mo4wrKlTMl'];
client.blacklisted = blacklisted;

// Intializng the Enmap
client.oneups = new Enmap({name: 'oneups'});

// Logging into the client with the token hidden in config.json
client.login(config.token);