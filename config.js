const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254702713600";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_39_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvaGl5M0k3ZDRjWDRTTzRWbmNtTEpPYjkycHVRN1dWMUtyWmhqbjVqZGdBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5MDg0MTk3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjQ0NzM0Njc2RkMxMDk4NDFFMUM3N0U4NjAzMjhDMzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzM0MzQ3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjI1aFkzbC1uVGhDRTdhYnVEWWt0ZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODMxZDAyYjktZmEyMC00NjQzLTk5OWMtNjE5NTc2MWY4MjE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTQ2LFxuICAgICAgMTMsXG4gICAgICAyNCxcbiAgICAgIDEwOCxcbiAgICAgIDQsXG4gICAgICAxMzIsXG4gICAgICAyMDYsXG4gICAgICAyMDUsXG4gICAgICAxNDEsXG4gICAgICAxOTgsXG4gICAgICAxMDMsXG4gICAgICAxOTEsXG4gICAgICA1OCxcbiAgICAgIDIxNixcbiAgICAgIDE0OSxcbiAgICAgIDI0OSxcbiAgICAgIDEzOSxcbiAgICAgIDE2NyxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMjE4LFxuICAgICAgMTIwLFxuICAgICAgNTUsXG4gICAgICAxMzUsXG4gICAgICAxNjYsXG4gICAgICA4LFxuICAgICAgMTUsXG4gICAgICAxMDEsXG4gICAgICAxMjEsXG4gICAgICAyMTMsXG4gICAgICAyMjgsXG4gICAgICAxMTEsXG4gICAgICAxNzgsXG4gICAgICAxMjQsXG4gICAgICAxMTMsXG4gICAgICA2NixcbiAgICAgIDk3LFxuICAgICAgODgsXG4gICAgICA0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWOEcyRDlaV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzkwODQxOTc2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyOTE3NDQ1NjkzNDQzOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSi9ta1c4UWcvQ290QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvOXBLQkdidTlJa3FPbWNvY2Q4WXlOeXpFMUxtWTE2dUFuMzJKR3N6anhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh0U2Z2ZFAzWi9ZRU9ZcGFCRTNSU1F4YUF3Zkl6bEJJK1h6U0RRZk10bVhTRHpoV2t4UE1ONys0aUs5NlJGVVh1SVVRK0czckxLbWtjWDRXc29TSUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInEyRHNuT3JJNUZWNC9pc1FhQ2N5WmdSRjlldHpxb0JHNnJXUWw4aGg0VWE3QzY0dFU3OXgxVVBtQTFaNGJXaCtBb3pMRm1qZDdBZFJobys0K1ZybGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc5MDg0MTk3NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzMzQzNDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLN3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs3dy5qc29uIjogIntcImtleURhdGFcIjpcImFQVkNPcjN0SWZJMlNaN3czMHFHcXVsRUl2Vnk3ZUp5Y2diMS9nRjdxbnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjMzMDc1NDg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMjk4MzIxODM5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
