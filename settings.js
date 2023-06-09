const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6282253969170'] //ur owner number
global.ownernomer = "6282253969170" //ur owner number2
global.ownername = "Rynx" //ur owner name
global.ytname = "Requiem Rynx" //ur yt chanel name
global.socialm = "GitHub: RynxPantek" //ur github or insta name
global.location = "Indonesia, Tanah Bumbu" //ur location

//new
global.botname = "Rynx Bot English Version V 0.1"
global.ownernumber = '6282253969170'
global.ownername = 'Rynx'
global.ownerNumber = ["6282253969170@s.whatsapp.net"]
global.ownerweb = "https://sociabuzz.com/rianananta"
global.websitex = "https://sociabuzz.com/rianananta"
global.wagc = "https://chat.whatsapp.com/HkIAtlbjObD3OlrVj7RlVa"
global.themeemoji = '🥀'
global.wm = "Rynx Bot Inc."
global.botscript = 'XIXIXIXIXI MAU SC? CHAT wa.me/6282253969170' //script link
global.packname = "Sticker By"
global.author = "Rynx Bot\n\n\nA whatsapp bot developed by\nRynxBotMd\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : +6282253969170"
global.creator = "6282253969170@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})