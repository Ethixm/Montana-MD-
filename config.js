const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94759329023"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kenton2004:kenton2004@cluster0.8ywpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'xkenton0@gmail.com'
global.github = 'https://github.com/montanatech/montana-md-'
global.location = 'mutare zim'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '263789432940' 
global.devs = '263789432940';
global.website = 'https://github.com/montanatech/montana-md-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd3SkNpci9abWl3WnlOR2l6UVlMODVBa0hYYzNjc01GVzYyRU1PTUdHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVdxRVhFejZrc3BSeTVqZ2lzZXpLbjVSRTg2VzhQTXVDeU5scEE1b0VRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHJFQXNZUTV4NTlTclhSYzR5dkFQbFJwNTlWWmtnVWVPUndmZG5IZ2xvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsdDZ6UDI2UkZMRU8zdUNReUdxVTRWOGM2WHlmbGEwNXVpM1NVWlFrb3pvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHTjB1S1ZjRjg5NmpYQnd0WkMyRnpoUmd1RHc4a2FzSElHYXNQVVByMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBpb3JWVU9ENEpIZHpuOENMdlUvcVZIZnpnVmtBeDdJMjFndG51STdERGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVZWVNOTWJONUlGSlJZaUdLaytOek85SzhpWXh0OUs4Q3Q5eE1zR2huaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDAxRTlyOTdMMjF6cXVaWVBLbStwRDcwVjlXTzRwd0t1eDBXYVcwK1dSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrWkw1L2hydGF3Zk8vTWN0ZVFxbWpYVlJuZzQzdG9RbXFmckovanhkVmFhbTB4UkJEZFFFTGZ3NERES3FNM1JGRlBlRUp0NnBzazZ4WXNRQWRua0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJ2a2p1YXFNS2pzMDJud2Z3cGxyc21YT1l1eUkzY25ackxEZ29rRmV1MjRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwTnFUdXI2NVRNMmRMRGJxV2tQVUxBIiwicGhvbmVJZCI6IjM2NTUwNzdlLTEyMjAtNDAwMi1hYWY1LWZlMDU2M2QxZDJhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTYk5uU2I0RlJ2OHpFYU5LRHpVWm1tcjZ4MnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hvMG1hUnJQejYxRmNjUXdESmR2dVVYV0R3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJBOUMxN0RUIiwibWUiOnsiaWQiOiI5NDc1OTMyOTAyMzo0NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAweE1zREVKamFsTGdHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkxRVk1CTTlyYVZrQWhGdnlOakZjYzFqeGxYVlNWaVk0Q1ZUbENkRFJobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNWQ2OGhEQUZMRFYySmRlRHdpRW5PUUl0eURrS0twNGtNTzhLTnFGSGtocGx2ZkVlSk1sTmUvcHVQa2xDdW9wRStsS0tOTDArZkNZVE9sNWNwaVVTQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhRbWNVcFEzV01wcDlRUkFXNlNxbkNzNWZIbkViUzlSY2VYSGJ5NmtwMmt4R0VTc3dDemJYaEQvYkVaVHNPT3dpVXVIeklwSzJaL09Rbm5CMTRYVUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTkzMjkwMjM6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlMwRlRBVFBhMmxaQUlSYjhqWXhYSE5ZOFpWMVVsWW1PQWxVNVFuUTBZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM5MjQ4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRFkifQ==",  //eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd3SkNpci9abWl3WnlOR2l6UVlMODVBa0hYYzNjc01GVzYyRU1PTUdHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVdxRVhFejZrc3BSeTVqZ2lzZXpLbjVSRTg2VzhQTXVDeU5scEE1b0VRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1UHJFQXNZUTV4NTlTclhSYzR5dkFQbFJwNTlWWmtnVWVPUndmZG5IZ2xvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsdDZ6UDI2UkZMRU8zdUNReUdxVTRWOGM2WHlmbGEwNXVpM1NVWlFrb3pvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHTjB1S1ZjRjg5NmpYQnd0WkMyRnpoUmd1RHc4a2FzSElHYXNQVVByMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBpb3JWVU9ENEpIZHpuOENMdlUvcVZIZnpnVmtBeDdJMjFndG51STdERGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVZWVNOTWJONUlGSlJZaUdLaytOek85SzhpWXh0OUs4Q3Q5eE1zR2huaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDAxRTlyOTdMMjF6cXVaWVBLbStwRDcwVjlXTzRwd0t1eDBXYVcwK1dSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrWkw1L2hydGF3Zk8vTWN0ZVFxbWpYVlJuZzQzdG9RbXFmckovanhkVmFhbTB4UkJEZFFFTGZ3NERES3FNM1JGRlBlRUp0NnBzazZ4WXNRQWRua0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJ2a2p1YXFNS2pzMDJud2Z3cGxyc21YT1l1eUkzY25ackxEZ29rRmV1MjRjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwTnFUdXI2NVRNMmRMRGJxV2tQVUxBIiwicGhvbmVJZCI6IjM2NTUwNzdlLTEyMjAtNDAwMi1hYWY1LWZlMDU2M2QxZDJhYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTYk5uU2I0RlJ2OHpFYU5LRHpVWm1tcjZ4MnM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hvMG1hUnJQejYxRmNjUXdESmR2dVVYV0R3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJBOUMxN0RUIiwibWUiOnsiaWQiOiI5NDc1OTMyOTAyMzo0NEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAweE1zREVKamFsTGdHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkxRVk1CTTlyYVZrQWhGdnlOakZjYzFqeGxYVlNWaVk0Q1ZUbENkRFJobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNWQ2OGhEQUZMRFYySmRlRHdpRW5PUUl0eURrS0twNGtNTzhLTnFGSGtocGx2ZkVlSk1sTmUvcHVQa2xDdW9wRStsS0tOTDArZkNZVE9sNWNwaVVTQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhRbWNVcFEzV01wcDlRUkFXNlNxbkNzNWZIbkViUzlSY2VYSGJ5NmtwMmt4R0VTc3dDemJYaEQvYkVaVHNPT3dpVXVIeklwSzJaL09Rbm5CMTRYVUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTkzMjkwMjM6NDRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlMwRlRBVFBhMmxaQUlSYjhqWXhYSE5ZOFpWMVVsWW1PQWxVNVFuUTBZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM5MjQ4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRFkifQ==, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "MONTANA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'VIHAGA MD' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
