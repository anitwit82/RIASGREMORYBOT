//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://toxicmd:toxxicmd12@toxic1239.04ozxeb.mongodb.net/?retryWrites=true&w=majority&appName=Toxic1239";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/EBUvKfB.jpeg";
global.devs = "+2348064999170";
global.sudo = process.env.SUDO || "+2348064999170";
global.owner = process.env.OWNER_NUMBER || "+2348064999170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/EBUvKfB.jpeg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://toxic-session-id.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk50dWRXQWJjTlMxK1h5d0J2aEZwNDVUUnlBamVlOWxobzVJOWhEWStYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzlxU1JrUndHQXZ0MmtadGV3czlpSGtyck5FTHdwcUU2aEhXaWVhTFBWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR0RvMUNRQzJKd3d5SDFtUS9JN3Rpbnh2Y2dOMDFYTCtraHdDWmZDMjNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxVUttUEI3b3VRNHhVelJ3QjBPTkE0RU50NGY4aG5ucXhyUEhsRXo4MlFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFOejM4WTNYRE1HVlRjWnJDR0c2R0Fqd2RvR3dNSHptTVdFNzZIcVNPVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1oQldPL01ubzlXK0JSclBFTVpOeTcrU3NCdW9vK1kxSDBhN1FIbVNUaW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVBqVDJBTTFBM0xhSVFydEpMZXRMWWdMcFUzOXZRTTQ3Zk5jTndqTW1rQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianM5SnhzWFJVY1NjeUI3bjdBTWJXOUFOcG84WStMZUozVVNSQXd6Y3AyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZSVmJENnFycXQ4VHRiMGV3Ri9DUGlkQnk3UElCNVl1YjE0WDF2QTd1VnZrVVdidlVremMwa09TOE1BRkoxcnRuTmlpTlljK0JZZnBUSjRxU0RTbGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJHc3JWSUxGaVpSVHBKQWVkMUR0WTFXa3BWN0QzOFE2dnV2OEFBVmtZaTRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSNmRINXNBRlRwT3g3U3g3MFMwV2tBIiwicGhvbmVJZCI6IjExYWNhYzdlLWI3ZTktNGRjYy1hZmUxLTViMTQ0MTZlMjY3YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZ3crWVpaekFnckc1VGZ4dnNKcFpaS1dkRkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmdiaTR2MzJyVmFUOHFicGwxVnhCM044R1hFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdaVk1ENzEyIiwibWUiOnsiaWQiOiIyMzQ4MDY0OTk5MTcwOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVHdpdGNoZWxsIE1lZGlhIGFzc3QgMSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjZBaGNjRUVQMlgyTGtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU3VVOWdUb0pRMlJHL2JkLzBRT1JzMy9DaE9zSGRIQmxDVDYxZW1IcUpHbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTTVNdncveW9nYWNCd3lCTmhUMEdoREFpK1BkOTZWbFZYaEFsS3ZWNnByVy82em4ybFVkc2xSeW5JTWRsVy9LK3BqdU9IR25HZ1pNckhlRnY3Z3ZzQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlpkdnQ2VXRnbHlXQUJpQUxDWmhDb1VtbW12dmQzbmFYOS91WmlEVEtSekRvQVhkbSt2U1c0MC9hcDBxRDY2S1B1Y2NVQ3h2S2poTEFsYzZKYnZjbWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2NDk5OTE3MDo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVybFBZRTZDVU5rUnYyM2Y5RURrYk4vd29UckIzUndaUWsrdFhwaDZpUnEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE1OTUyNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHVIIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.2",
  caption: process.env.CAPTION || "©ᴛᴏxxɪᴄ ᴍᴅ $",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴛᴏxxɪᴄ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
