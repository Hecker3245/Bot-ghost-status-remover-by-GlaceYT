/**/
/// ██╗░░██╗███████╗░██████╗██╗░░██╗███████╗██████╗░██╗██╗██╗
//  ██║░░██║██╔════╝██╔════╝██║░██╔╝██╔════╝██╔══██╗██║██║██║
//  ███████║█████╗░░██║░░░░░█████╔╝░█████╗░░██████╔╝██║██║██║
//  ██╔══██║██╔══╝░░██║░░░░░██╔═██╗░██╔══╝░░██╔══██╗╚═╝╚═╝╚═╝
//  ██║░░██║███████╗╚██████╗██║░░██╗███████╗██║░░██║██╗██╗██╗
//  ╚═╝░░╚═╝╚══════╝░╚═════╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝╚═╝╚═╝
//  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});


const statusMessages = ["💚 Listening to Hecker#7260","💥 Looking for Habibi","💢 Dont be Mean!","😁 I Will Ban You!","👀 You doing Haram?","😎 I am Arab","😠 Don't Mess With Me!","👮‍♂️ Certified Islamic Police!","🤬 FBI...FBI OPEN UPPP!!!","🎵 No Music!","🙄 You are Gay!","😛 I Am a Legend!","🤯 I have ∞ IQ","(☞ﾟヮﾟ)☞","☜(ﾟヮﾟ☜)","☜(⌒▽⌒)☞","༼ つ ◕_◕ ༽つ","＼（〇_ｏ）／","😁 YALLA YALLA!!!","👳‍♂️ HABIBI HABIBI!!!","🙌 We Keep it Halal Here","🕵️‍♂️ Certified Islamic Police","😍 79's Love Me!"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/** ██╗░░██╗███████╗░██████╗██╗░░██╗███████╗██████╗░██╗██╗██╗
//  ██║░░██║██╔════╝██╔════╝██║░██╔╝██╔════╝██╔══██╗██║██║██║
//  ███████║█████╗░░██║░░░░░█████╔╝░█████╗░░██████╔╝██║██║██║
//  ██╔══██║██╔══╝░░██║░░░░░██╔═██╗░██╔══╝░░██╔══██╗╚═╝╚═╝╚═╝
//  ██║░░██║███████╗╚██████╗██║░░██╗███████╗██║░░██║██╗██╗██╗
//  ╚═╝░░╚═╝╚══════╝░╚═════╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝╚═╝╚═╝
//  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

//  ██╗░░██╗███████╗░██████╗██╗░░██╗███████╗██████╗░██╗██╗██╗
//  ██║░░██║██╔════╝██╔════╝██║░██╔╝██╔════╝██╔══██╗██║██║██║
//  ███████║█████╗░░██║░░░░░█████╔╝░█████╗░░██████╔╝██║██║██║
//  ██╔══██║██╔══╝░░██║░░░░░██╔═██╗░██╔══╝░░██╔══██╗╚═╝╚═╝╚═╝
//  ██║░░██║███████╗╚██████╗██║░░██╗███████╗██║░░██║██╗██╗██╗
//  ╚═╝░░╚═╝╚══════╝░╚═════╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝╚═╝╚═╝
//  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 *   Code by RTX GAMING
 * **********************************************
 */
