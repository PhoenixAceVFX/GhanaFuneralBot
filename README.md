# Ghana Funeral Bot
A Discord Bot that takes 7 tokens to mass join 1 voice channel to play Astronomia

# How to setup
Clone the repo and be sure you have nodejs version 12.0 or later installed.

Install discord.js v12 by simply typing "npm install `<discord.js>`

Go to config.json and add 7 tokens. 
`<token_guy1>`Will be the bot that plays music and be the first one to join.

# How to run
Simply type !g join in the voice channel you're in. (Be sure you have admin permission) 
The bot with `<token_guy1>` will play the mp3 file first and after 20 seconds the rest of the bots will join.
If the bots wont leave for some reason, !g leave is an alternative.

# Current Bugs
- If called in multiple voice chats in the same server, can cause errors. 
