# REHOSTED BY PHOENIXACEVFX

# Ghana Funeral Bot
A Discord Bot that takes 7 tokens to mass join 1 voice channel to play Astronomia

[Example](https://gfycat.com/delightfulsillykronosaurus)

# Invite
If you don't wish to self-host, that's alright. Here are the invite links to all the bots! Grab them quick before 100 servers take them all!

- [Main Bot](https://discord.com/api/oauth2/authorize?client_id=846423187810025522&permissions=36719622&scope=bot)
- [Henchmen 1](https://discord.com/api/oauth2/authorize?client_id=846423445214068756&permissions=36719622&scope=bot)
- [Henchmen 2](https://discord.com/api/oauth2/authorize?client_id=846423601725177898&permissions=36719622&scope=bot)
- [Henchmen 3](https://discord.com/api/oauth2/authorize?client_id=846423729882005544&permissions=36719622&scope=bot)
- [Henchmen 4](https://discord.com/api/oauth2/authorize?client_id=846423842913255434&permissions=36719622&scope=bot)
- [Henchmen 5](https://discord.com/api/oauth2/authorize?client_id=846423947305287711&permissions=36719622&scope=bot)
- [Coffin](https://discord.com/api/oauth2/authorize?client_id=846424485632409671&permissions=36719622&scope=bot)

# How to setup
Clone the repo and be sure you have nodejs version 12.0 or later installed.
Run `<npm install>` in the same directory of packages.json
Go to config.json and add 7 tokens. 
`<token_guy1>`Will be the bot that plays music and be the first one to join.
Run the bot simply with `<nodemon main.js >`

# How to use

Simply type !g join in the voice channel you're in. (Be sure you have admin permission) 
do !g ban @user to ban them in style!  

# Current Bugs
- If called in multiple voice chats in the same server, can cause errors. 

# Changelogs
**May 4th 2020**
* Merged pull request with [ExterminatorX99](https://github.com/ExterminatorX99)
  * Clients 1 - 6 are now under a for loop, I wasn't smart enough to think like that
  * Better formatting too
* Changed permissions from just Administrator to Manage Channels.

**May 1st 2020**
* Added !g ban <user mention> <reason> (popular request)
  * Be sure to give Benjamin Aidoo Ban permissions
  * Once executing the command, it will play the sound as normal, but after the music ends, the bot will ban the member and DM the member they have been banned 
* Made command and arg definition that I just copied from discordjs.guide
* Changed invite permissions to include Ban Members
**April 29th 2020**
* Changed duration from 20500 to 19500 for clients 1 - 6
* Better Logging
* Fixed packages.json whoops
* Added nodemon and console-stamp
* Added !g help

Feel free to report any bugs to me at shaftAndi#1825
